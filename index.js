const places = Object.freeze({
  HOUR_TENTH: 0,
  HOUR_ONES: 1,

  MIN_TENTH: 2,
  MIN_ONES: 3,

  SEC_TENTH: 4,
  SEC_ONES: 5,
});

const orders = Object.freeze({
  0: { min: 0, max: 2 },
  1: { min: 0, max: 9 },

  2: { min: 0, max: 5 },
  3: { min: 0, max: 9 },

  4: { min: 0, max: 5 },
  5: { min: 0, max: 9 },
});

function createNumberLine(id, type) {
  const element = document.getElementById(id);
  if (element) {
    for (let i = orders[type].min; i <= orders[type].max; i++) {
      const child = document.createElement("div");
      child.innerText = i;
      child.classList = "block number glass";
      element.appendChild(child);
    }
  }
}

function processTime() {
  const r = new Date().toLocaleTimeString();
  const [hh, mm, ss] = r.split(":");
  console.log([...hh, ...mm, ...ss], r)

  return [...hh, ...mm, ...ss].map(e=>parseInt(e, 10));
}

function setTime() {
  const t = processTime();
  console.log(t)

  let i = 0;

  for (const id in places) {
    const index = i++;
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.classList = `block abs move-${t[index]}`
    }
  }
}

function main() {
  for (const key in places) {
    createNumberLine(key, places[key]);
  }

  setTime();
  setInterval(setTime, 1000);
}

main();

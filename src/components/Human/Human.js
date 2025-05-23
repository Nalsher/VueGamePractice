import { ref } from "vue";

export const Human = ref({
  positionX: 10,
  positionY: 10,
  leftBorder: 10000,
  rightBorder: 10000,
  bottomBorder: 10000,
  topBorder: 10000,
  lastRotate: 0,
});

export function moveLeft() {
  Human.value.rotate = -90;
  Human.value.lastRotate = -90;
  if (Human.value.positionY - 10 < Human.value.leftBorder) {
    Human.value.positionY += 0;
  } else {
    Human.value.positionY -= 1;
  }
}

export function moveRight() {
  Human.value.rotate = 90;
  Human.value.lastRotate = 90;

  if (Human.value.positionY + 10 > Human.value.rightBorder) {
    Human.value.positionY += 0;
  } else {
    Human.value.positionY += 1;
  }
}

export function moveBottom() {
  Human.value.rotate = 180;
  Human.value.lastRotate = 180;
  if (Human.value.positionX + 10 > Human.value.bottomBorder + 38) {
    Human.value.positionX += 0;
  } else {
    Human.value.positionX += 1;
  }
}

export function moveTop() {
  Human.value.rotate = 0;
  Human.value.lastRotate = 0;
  if (Human.value.positionX - 10 < Human.value.topBorder) {
    Human.value.positionX -= 0;
  } else {
    Human.value.positionX -= 1;
  }
}

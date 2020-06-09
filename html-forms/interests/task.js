let checkBoxes = document.querySelectorAll('.interest__check');

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (event) => {
    let clickedBox = event.currentTarget;
    let parent = clickedBox.closest('.interest');
    // console.log(parent);
    let childBoxes = parent.querySelectorAll('.interest__check');
    // console.log(childBoxes);
    childBoxes.forEach((box) => box.checked = clickedBox.checked);
  });
});
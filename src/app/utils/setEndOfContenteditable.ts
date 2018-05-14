export default function setEndOfContenteditable(el: HTMLElement) {
  const range = document.createRange();
  let clonedRange;
  const pos = el.lastChild.textContent.length;
  console.log(pos);
  const sel = window.getSelection();
  console.log(el);
  if (range.endOffset === 0) {
    clonedRange = range.cloneRange();
    clonedRange.setStart(range.endContainer, range.endOffset);
    //clonedRange.setEnd(range.endContainer, range.endOffset + 1);
  } else {
    if (range.endOffset - 1 < 0) {
      return null;
    }
    clonedRange = range.cloneRange();
    clonedRange.setStart(range.endContainer, range.endOffset - 1);
    //clonedRange.setEnd(range.endContainer, range.endOffset);
  }
  clonedRange.collapse(true);
  sel.removeAllRanges();
  sel.addRange(clonedRange);
  el.focus();
}

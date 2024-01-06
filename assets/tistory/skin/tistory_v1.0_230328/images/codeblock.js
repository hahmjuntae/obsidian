const COPY_ERROR_MESSAGE = '코드를 복사할 수 없습니다. 다시 시도해 주세요.';

const copyBlockCode = async (target = null) => {
  if (!target) return;
  try {
    const code = decodeURI(target.dataset.code);

    await navigator.clipboard.writeText(code);
  } catch (error) {
    alert(COPY_ERROR_MESSAGE);
    console.error(error);
  }
};

window.addEventListener('load', () => {
  const codeBlocks = document.querySelectorAll('pre > code');


  for (const codeBlock of codeBlocks) {
    const codes = codeBlock.innerHTML.match(/(.*)(\n|.*$)/g);

    const processedCodes = codes.reduce((prevCodes, curCode) => prevCodes +
    `<div class="line">${curCode}</div>`, '');

    const copyButton = `<button class="copy-btn"
    data-code="${encodeURI(codeBlock.textContent)}"
    onclick="copyBlockCode(this)"><i class="fa-regular fa-copy"></i></button>`;

    const codeBody = `<div class="code-body">${processedCodes}</div>`;

    const codeHeader = `<div class="code-header"><span class="red btn"></span><span class="yellow btn"></span><span class="green btn"></span>${copyButton}</div>`;

    codeBlock.innerHTML = codeHeader + codeBody;
  }
});

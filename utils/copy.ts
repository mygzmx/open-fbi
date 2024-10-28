const copyExecCommand = function (text: string) {
  try {
    const _textArea = document.createElement('textArea');
    // @ts-ignore
    _textArea.value = text;
    _textArea.style.width = "0px";
    _textArea.style.height = "0px";
    _textArea.style.clip = "rect(0, 0, 0, 0)";
    _textArea.style.position = 'fixed'
    _textArea.style.left = '-99px'
    _textArea.style.top = '-99px'
    _textArea.setAttribute('readonly', 'readonly')
    document.body.appendChild(_textArea);
    // @ts-ignore
    _textArea.select()
    const successful = document.execCommand('copy')
    if (!successful) {
      console.warn("document.execCommand was unsuccessful");
    }
    document.body.removeChild(_textArea);
  } catch (e) {
    // trying IE specific stuff
    console.warn("document.execCommand was unsuccessful", e)
    try {
      // @ts-ignore
      window.clipboardData && window.clipboardData.setData("text", text);
    } catch (err) {
      console.warn("window.clipboardData was unsuccessful", err)
    }
  }
}

export const onCopyText = function (text: string, fn?: () => void) {
  if (navigator.clipboard && navigator.permissions && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .catch(() => {
        copyExecCommand(text);
      }).finally(() => { fn && fn() })
  } else {
    copyExecCommand(text)
    fn && fn();
  }
}

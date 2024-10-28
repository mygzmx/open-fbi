type IToastShow = (message: string) => void;
export const ToastShow: IToastShow = (message) => {
  try {
    const hasToast = document.getElementById("toast_dom");
    if (hasToast) return;
    const toastDom = document.createElement('div');
    toastDom.id = "toast_dom";
    toastDom.style.display = "inline-block";
    toastDom.style.width = "auto";
    toastDom.style.maxWidth = "204px";
    toastDom.style.maxHeight = "70%";
    toastDom.style.color = "white";
    toastDom.style.wordBreak = "break-word";
    toastDom.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    toastDom.style.borderRadius = "8px";
    toastDom.style.pointerEvents = "all";
    toastDom.style.fontSize = "15px";
    toastDom.style.lineHeight = "1.5";
    toastDom.style.boxSizing = "border-box";
    toastDom.style.padding = "12px 8px";
    toastDom.style.position = "fixed";
    toastDom.style.top = "50%";
    toastDom.style.left = "50%";
    toastDom.style.zIndex = "9999";
    toastDom.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(toastDom);
    toastDom.innerText = message;
    setTimeout(function () {
      document.body.removeChild(toastDom);
    }, 3000)
  } catch (e) {}
}

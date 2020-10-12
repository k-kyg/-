const textarea = document.getElementById("txtarea");
const showarea = document.getElementById("showlength");
const download = document.getElementById("download");
const count = () => showarea.textContent = [...textarea.value].length;
textarea.addEventListener("input", count);
window.addEventListener("load", e => {
    textarea.value = localStorage.getItem("val") ?? "";
    count();
});
window.addEventListener("unload", e => {
    localStorage.setItem("val", textarea.value);
});
download.addEventListener("click", e => {
    const filename = window.prompt("ファイル名を入力してください");
    if(!filename) return;
    download.download = `${filename}.txt`
    download.charset = 'utf-8';
    download.href = `data:text,${encodeURIComponent(textarea.value)}`;
});
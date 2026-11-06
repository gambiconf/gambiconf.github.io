// Legacy fallback for contexts without the async Clipboard API
// (e.g. plain HTTP on a LAN IP, or older browsers).
const copyWithExecCommand = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
};

/**
 * Copies `text` to the user's clipboard.
 * Resolves to `true` on success and `false` if every strategy failed.
 */
const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return copyWithExecCommand(text);
  }
};

export { copyToClipboard };

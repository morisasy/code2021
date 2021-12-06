
export const uid = () =>{
  const head = Date.now().toStrin(36);
  const tail = Math.random().toString(36).substr(2);
  return head + tail;
}

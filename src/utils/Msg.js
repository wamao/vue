
const initOption={
  Duration:3000,  //显示时间
  ErrMsg:'err',  // 提示内容

}



export function ErrMsg(options=initOption){
  let Body=document.body;
  let msgContent = document.createElement('div');
      msgContent.className="lw_Errmsg"
      msgContent.innerHTML='<span>'+options.ErrMsg+'</span>';
      Body.appendChild(msgContent);
   let timer=setTimeout(function(){
       Body.removeChild(msgContent);
        clearTimeout(timer);
   },options.Duration);   
}


export function Toast(options=initOption){
  let Body=document.body;
  let msgContent = document.createElement('div');
      msgContent.className="lw_toast"
      msgContent.innerHTML='<span>'+options.ErrMsg+'</span>';
      Body.appendChild(msgContent);
   let timer=setTimeout(function(){
       Body.removeChild(msgContent);
        clearTimeout(timer);
   },options.Duration);   
}
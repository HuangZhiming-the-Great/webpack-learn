funtion component(){
  var element = document.createElement('div');
  
  //Lodash (_.join()引入)对于执行这一行是必须的。
  element.innerHTML = _.join(['Hello','webpack'],' ');
  return element;
}
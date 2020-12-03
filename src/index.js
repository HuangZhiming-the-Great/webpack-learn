import _ from 'lodash';

function component(){
  var element = document.createElement('div');
  
  //Lodash (_.join()引入)对于执行这一行是必须的。
  //现在lodash以import的形式引入。
  element.innerHTML = _.join(['Hello','webpack'],' ');
  return element;
}

document.body.appendChild(component());
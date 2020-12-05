import _ from 'lodash';
import './style.css';
import icon from './icon.jpeg';
import data from './data.xml';
function component(){
  var element = document.createElement('div');
  
  //Lodash (_.join()引入)对于执行这一行是必须的。
  //现在lodash以import的形式引入。
  element.innerHTML = _.join(['Hello','webpack'],' ');
  element.classList.add('hello');

  //将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src=icon;

  element.appendChild(myIcon);

  console.log(data);
  
  return element;
}

document.body.appendChild(component());
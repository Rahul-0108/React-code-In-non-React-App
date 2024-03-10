import { MyComponent } from './MyComponent';
import './index.scss';
import ReactDOM from 'react-dom';

const Render = async (divId: string, componentName: string, config?: any) => {
  let component: JSX.Element = <></>;
  switch (componentName) {
    case 'MyComponent':
      component = <MyComponent data = {config} />;
      break;

    // .....New components to Render
  }

  ReactDOM.render(component, document.getElementById(divId));
};

(window as any).React = { Render }; // Make React variable a global variable to be used inside MVC App

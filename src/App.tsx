import styled from '@emotion/styled';
import './App.css';
import { env } from './config';
import { getImageUrl } from './utils/assets';

const Container = styled.div`
  .logo {
    margin: 0 auto;
    width: 240px;
    height: 240px;
    background: url(${getImageUrl('astrocat.png')}) no-repeat;
    background-size: 100% 100%;
  }
  .version {
    padding: 10px 0;
    font-weight: bold;
  }
  ul.description {
    padding: 10px 0;
    text-align: left;
    letter-spacing: .8px;
    li {
      &:nth-of-type(odd) {
        color: rgba(255, 0, 0, .9);
      }
      &:nth-of-type(even) {
        color: #333;
        text-indent: 30px;
        padding-bottom: 10px;
      }
    }
  }
`
function App() {
  
  return (
    <Container>
      <div className='logo'></div>
      <h1>Vite + React 自动生成版本号</h1>
      <h2 className='version'>Build:V{env.VITE_APP_VER}</h2>
      <ul className='description'>
        <li>1、为什么要自动生成版本号?</li>
        <li>build自动生成版本号，能让生产发布流程更清晰，避免沟通障碍</li>
        <li>2、如何自动生成版本号?</li>
        <li>
          每次打包时，npm run build参数中调用version.js文件动态修改package.json的version
          <div>同时修改.env文件中的版本号</div>
        </li>
        <li>3、如何查看版本号?</li>
        <li>一运行就log版本号到console中
          <div>快捷键唤醒弹窗，显示版本号</div>
        </li>
        <li>4、关健文件</li>
        <li>
          <div>vite.config.js</div>
          <div>version.js</div>
          <div>.env</div>
          <div>package.json</div>
        </li>
      </ul>
    </Container>
  )
}

export default App

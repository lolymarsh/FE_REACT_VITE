import ContainerComponent from "./Components/ContainerComponent";
import H2Component from "./Components/H2Component";
import PComponent from "./Components/PComponent";
import ResumeComponent from "./Components/ResumeComponent";

const App = () => {
  return (
    <ContainerComponent>
      <div className="container">
        <ResumeComponent text="Resume" />
        <H2Component text="นายภูวดล ทนค้ำ" />
        <PComponent text="สีที่ชอบ สีเขียว" />
        <PComponent text="ความสูง 175 ซม." />
        <PComponent text="น้ำหนัก 60 กก." />
        <PComponent text="คำคมที่ชอบ ความสุขไม่ได้มาจากการมีสิ่งของมากมาย แต่มาจากการรับรู้และดีใจกับสิ่งที่มี" />
      </div>
    </ContainerComponent>
  );
};

export default App;

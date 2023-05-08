import './App.css';
const FIRST_WORDS = [`Self-image - самооценка`,`consider - рассматривать, учитывать`,`proud - гордый`,`see - видеть`,`think of - думать о`,`average - средний`,`bald - лысый`,`blond - блондин`,`build - телосложение`,`complexion - цвет лица, кожи`,`dark - темный`,`healthy - здоровый`,`muscular - мышечный`,`narrow - узкий`,`pale - бледный`,`pointed - острый, заостренный`,`prominent - выступающий, заметный`,`shiny - блестящий`,`slim - худой, стройный`,`straight - прямой`,`tanned - загорелый`,`wavy - волнистый`,`wide - широкий`,`analyst - аналитик`,`arrest - арестовывать`,`arrogant - высокомерный`,`automatic - автоматический`,`ban - запрет, запрещать`,`base - основание`,`Beefeater - страж королевских залов`,`bite - кусать, укус`,`bottom - низ, дно`,`career - карьера`,`cashier - кассир`,`challenge - вызов, испытание`,`chaos - хаос`,`chew - жевать`,`citizen - гражданин`,`clever - умный`,`clip - зажимать, прищипывать`,`coalition - коалиция`,`courtroom - зал суда`,`crossword - кроссворд`,`cucumber - огурец`,`decent - приличный`,`deputy - заместитель`,`dial - набирать номер`,`diplomacy - дипломатия`,`election - выборы`,`emergency - чрезвычайная ситуация`,`services - службы, сервис`,`episode - эпизод`,`executive - исполнительный`,`expert - эксперт`,`eye-opener - откровение, сенсация`,`face - лицо`,`fake - фальшивый, поддельный`,`fidget - вертеться, беспокоиться`,`fireworks - фейерверк`,`fit - в форме, подходящий`,`fatty - жирный`,`fuel - топливо`,`get away with - уйти от наказания`,`give away - отдавать, раздавать`,`govern - управлять`,`headquarters - штаб-квартира`,`hero - герой`,`honest - честный`,`imaginary - воображаемый`,`immigrant - иммигрант`,`impress - производить впечатление`,`impression - впечатление`,`instrument - инструмент`,`invade - вторгаться, захватывать`,`investor - инвестор`,`relevant - соответствующий, актуальный`,`key - ключевой`,`audit - аудит`,`landlord - домовладелец`,`liar - лжец`,`lie - ложь`,`lifestyle - образ жизни`,`likeable - приятный`]

console.log(FIRST_WORDS)

function App() {
  // console.log(FIRST_WORDS)
  return (
    <div className="App">
        {FIRST_WORDS.map(i => <li className='word'>{i}</li>)}
    </div>
  );
}

export default App;

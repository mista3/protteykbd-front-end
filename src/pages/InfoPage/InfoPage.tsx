import { Typography } from '@mui/material'
import './InfoPage.scss';
import { Image } from 'antd';

export const InfoPage = () => {
  return <div className='page info-page'>
    <div className="wrapper">
      <Typography variant='h3'>Какую механическую клавиатуру выбрать?</Typography>
      <Typography variant='body1'>Механическая клавиатура — не самое дешевое удовольствие, поэтому к ее выбору стоит подходить с умом. В этой статье мы расскажем, как не потратить свои деньги впустую на клавиатуру, которая вам не подойдет.</Typography>
      <Typography variant='h4'>Виды механических клавиатур</Typography>
      <Typography variant='body1'>Различных видов и классификаций механических клавиатур довольно много. Постараемся их все систематизировать и рассказать, как сделать выбор.</Typography>
      <Typography variant='h4'>По размеру</Typography>
      <Typography variant='body1'>По размеру выделяют четыре вида механических клавиатур:</Typography>
      <Typography variant='h5'>Полноразмерные с нампадом (100−110%)</Typography>
      <Image preview={false} src='/src/img/Полноразмерная_клавиатура.jpg' />
      <Typography variant='h5'>Без нампада (75%)</Typography>
      <Image preview={false} src='/src/img/Без_нампада.jpg' />
      <Typography variant='h5'>Без нампада, стрелок, F-ряда, клавиш home/pgdown и т.п. Все отсутствующие клавиши активируются при помощи Fn (60%)</Typography>
      <Image preview={false} src='/src/img/60_.jpg' />
      <Typography variant='h5'>Минимум всего. В таких клавиатурах бывает два Fn – каждый активирует свои дополнительные кнопки (40%)</Typography>
      <Image preview={false} src='/src/img/40_.jpg' />
      <Typography variant='body1'>Последние два типа идеально подходят для постоянного ношения с собой (например, как замена клавиатуры на ноутбуке), первые два — универсальные варианты.</Typography>
      <Typography variant='h4'>По наличию подсветки клавиш выделяют клавиатуры с подсветкой и без</Typography>
      <Typography variant='body1'>Клавиатуры с подсветкой, как правило, используются как игровые. С помощью качественной RGB-подсветки вы можете выделять разными цветами группы клавиш по своему усмотрению, чтобы облегчить использование игровых макросов в темное время суток. Подсветку можно настроить под интерьер комнаты или цвет шерсти кота, варианты ограничиваются только фантазией владельца.</Typography>
      <Typography variant='body1'>А вот рабочую лошадку лучше брать без подсветки, так как она отвлекает и из-за этого начинает раздражать. Хотя, это дело вкуса.</Typography>
      <Typography variant='h4'>По формату клавиатуры делятся на ANSI (американская раскладка) и ISO (европейская раскладка)</Typography>
      <Typography variant='body1'>Они отличаются размерами клавиш Enter, Shift и бэкслеш и функциональными особенностями клавиш Alt (Alt Gr служит для ввода дополнительных символов европейской раскладки).</Typography>
      <Image preview={false} src='/src/img/ANSI_and_ISO.png' />
      <Typography variant='body1'>Выбор формата — это исключительно вопрос привычки и удобства.</Typography>
      <Typography variant='h4'>По возможности изменять назначение клавиш выделяют непрограммируемые девайсы, клавиатуры с DIP-переключателями и программируемые клавиатуры</Typography>
      <Typography variant='body1'>DIP-переключатели позволяют аппаратно менять местами кнопки ctrl-caps lock, отключать/включать кнопку win (полезно для геймеров, чтобы игра не вылетала), менять местами win и alt (полезно для маководов). Иными словами, настраивать поведение клавиш-модификаторов.</Typography>
      <Typography variant='body1'>Программируемые клавиатуры позволяют перепрограммировать раскладку клавиатуры целиком. Часто это реализуется в виде переключаемых слоев. Например, в клавиатурах Vortex всего 4 слоя — 1 по умолчанию плюс 3 программируемых, между которыми можно без проблем переключаться.</Typography>
      <Typography variant='h4'>По форме механические клавиатуры делятся на классические и эргономичные</Typography>
      <Typography variant='body1'>Эргономичные клавиатуры предназначены тем, у кого проблемы с руками, спиной, либо тем, кто любит максимальный комфорт.</Typography>
      <Typography variant='body1'>Они представлены в двух видах:</Typography>
      <Typography variant='h5'>В едином корпусе: Kinesis Advantage, Truly Ergonomic</Typography>
      <Image preview={false} src='/src/img/1280x720-nzY.jpg' />
      <Typography variant='h5'>Раздельные: Ergodox, Mistel</Typography>
      <Image preview={false} src='/src/img/b6e2d32766e36a47.jpg' />
      <Typography variant='h4'>Самое важное мы припасли напоследок — это классификация механических клавиатур по типам переключателей</Typography>
      <Typography variant='body1'>Наличие переключателей — это главное отличие механических клавиатур и их основное преимущество.</Typography>
      <Typography variant='body1'>В статье мы будем рассматривать переключатели Cherry MX, как самые популярные и проверенные временем (выпускаются почти 30 лет).</Typography>
      <Typography variant='body1'>На картинке представлены основные варианты переключателей:</Typography>
      <Image preview={false} src='/src/img/list2.jpg' />
      <Typography variant='body1'>Для новичков в мире механики подойдут Cherry MX Brown — они тихие и дают отличную обратную связь.</Typography>
      <Typography variant='body1'>Для игр лучше выбрать Cherry MX Red (классика), Cherry MX Silent Red (если вам важно, чтобы клавиатура была тихой), Cherry MX Black (если вам нравятся тугие клавиши), Cherry MX Speed Silver (если необходима скоростная печать).</Typography>
      <Typography variant='body1'>Для кодинга и копирайтинга лучше выбрать Cherry MX Blue (для любителей клацанья), Cherry MX Speed Silver (как и в играх, упор на скорость).</Typography>
      <Typography variant='body1'>Cherry MX Clear — переключатели для опытных механиководов. Их подробно рассматривать не будем.</Typography>
      <Typography variant='h4'>Как сделать выбор?</Typography>
      <Typography variant='body1'>Вывод из информации выше:</Typography>
      <Typography variant='body1'>Если вы много печатаете и начали замечать усталость в плечах и нарушение осанки — приглядитесь к эргономичным клавиатурам.</Typography>
      <Typography variant='body1'>Геймерам больше подойдут стандартные клавиатуры, возможно, с дополнительными клавишами для макросов, DIP-переключателями или возможностью полностью перепрограммировать кнопки.</Typography>
      <Typography variant='body1'>Если вы ищете замену клавиатуры на ноутбуке — приглядитесь к компактным клавиатурам (40−60% от классического размера).</Typography>
      <Typography variant='body1'>Самое важное: выберите подходящие переключатели. Не можете определить, что вам нужно? Воспользуйтесь специальным тестером.</Typography>
    </div>
  </div>
}
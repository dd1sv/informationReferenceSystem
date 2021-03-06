import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Menu from './menu'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '200px'
  },
  textCenter: {
    maxWidth: '1000px'
  }
}));

export default function VK() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Поиск профиля" {...a11yProps(0)} />
        <Tab label="Получение информации" {...a11yProps(1)} />
        <Tab label="Получение метаинформации" {...a11yProps(2)} />
        {/* <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
      <div className={classes.textCenter}>
      <Typography paragraph>
        Для получения какой-либо информации о человеке, необходим материал с которым будет происходить работа.
        </Typography>
        <Typography paragraph>
        В связи с этим сам поиск профиля/аккаунта человека можно осуществить следующими образами:
        </Typography>
        <Typography variant="h6" gutterBottom>
        1. Поиск по ФИО и дополнительной информации
        
        </Typography>
        <Typography gutterBottom >
        <img src="img/vk/1.png" style={{maxWidth: '700px'}}></img>
        </Typography>
        <Typography gutterBottom>
         Данный интерфейс находиться по адресу <a href="vk.com/search">vk.com/search.</a>
         </Typography>
        <Typography gutterBottom>
          Граммотное использование имеющейся информации может сильно сузить круг, но при этом стоит учитывать, что владелец аккаунта может использовать аккаунт не под своим настоящем именем или искажать дополнительную информацию, с целью усложенения его поиска. Поэтому осуществление поиска различными комбинациями будет наиболее выигрышным вариантом
        </Typography>

        <Typography variant="h6" gutterBottom>
         2. Поиск через знакомых
        </Typography>
        <Typography gutterBottom>
         Если есть информация о связи определённого человек с исследумым объектом, при условии, что информации о странице первого имеется, в отличии от второго. То для получения сведений о страницы одним из вариантов будет - изучить список друзей, комментарии под записями, отметки мне нравится, а также ответы на записи пользователя (http://vk.com/feed?obj=***&q=&section=mentions, где вместо *** указывается идентификатор каждого пользователя).
        </Typography>
        <Typography gutterBottom>
         Также можно воспользоваться сервисом <a href="https://www.yasiv.com/vk">yasiv.com/vk</a> для нахождения общих знакомых между двумя лицами, для опредленения исследуемого лица
        </Typography>
        <Typography gutterBottom>
        <img src="img/vk/2.png"style={{maxWidth: '700px'}}></img>
        </Typography>
        <Typography variant="h6" gutterBottom>
         3. Поиск по фотографии
        </Typography>
        <Typography gutterBottom>
        Если из информации, который распологает исследователь, есть только фотография, то ряд сервисов поможет найти страницу в этой социальной сети. А именно:
        </Typography>
        <Typography gutterBottom>
         <a href="https://findclone.ru/">1. Findclone</a> (наиболее релевантные ответы на запросы)
        </Typography>
        <Typography gutterBottom>
        <img src="img/vk/3.png"style={{maxWidth: '700px'}}></img>
        </Typography>
        <Typography gutterBottom>
         <a href="https://search4faces.com/">2. Search4faces</a>
        </Typography>
        <Typography gutterBottom>
        <img src="img/vk/4.png"style={{maxWidth: '700px'}}></img>
        </Typography>
        <Typography gutterBottom>
        Также можно попробывать найти фотографию в Яндекс.Картинках или Google images, возможно автор изображения её уже публиковал и поисковые роботы просканировали её.
        </Typography>
        <Typography variant="h6" gutterBottom>
         4. Поиск по геолокации
        </Typography>
        <Typography gutterBottom>
        Поиск по геолокации представляет собой единственный путь решения - использование сервисов отображения фотографий на карте. Сущесвтует вероятность найти искомы объект именно таким способом.
        </Typography>
        <Typography gutterBottom>
        <a href="https://snradar.azurewebsites.net">1. SnRadar</a>
        </Typography>
        <Typography gutterBottom>
        <img src="img/vk/5.png"style={{maxWidth: '700px'}}></img>
        </Typography>
        <Typography gutterBottom>
        <a href="http://photo-map.ru/">2. Photo-map</a>
        </Typography>
        <Typography gutterBottom>
        <img src="img/vk/6.png"style={{maxWidth: '700px'}}></img>
        </Typography>
        <Typography variant="h6" gutterBottom>
         5. Поиск по номеру телефона
         
        </Typography>
        <Typography gutterBottom>
        Имея номер телефона найти пользователя, если он зарегестрирован не трудно, есть два варианта:
        </Typography>
        <Typography gutterBottom>
        1.Добавить в телефонную книжку номер телефона, а затем импортировать контакты.

        </Typography>
        <Typography gutterBottom>
        <img src="img/vk/7.png"style={{maxWidth: '700px'}}></img>

        </Typography>
        <Typography gutterBottom>
        2. Открыть новый чат, после чего импортировать контакт.

        </Typography>
        <Typography gutterBottom>
        <img src="img/vk/8.png"style={{maxWidth: '700px'}}></img>

        </Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.textCenter}>
      <Typography gutterBottom>
      В зависимости от типа профиля (открытый/закрытый) и зависит объем информации, который можно получить.
        </Typography>
        <Typography gutterBottom>
        <img src="img/vk/9.png"style={{maxWidth: '700px', maxHeight: '770px'}}></img>
        </Typography>
        <Typography gutterBottom>
      Если профиль закрытый, то рекомендуется использовать легендирование для получения доступа к старнице, то есть под вымышленным предлогом запроситься в друзья.
        </Typography>
        <Typography gutterBottom>
        Перед изучение профиля, исследователю необходимо понимать цель этого действия. Но для расширения имеющихся знаний, будем предполагать изучение всей страницы социальной сети.
        </Typography>
        <Typography gutterBottom>
        1. Поэтому изучение начать стоит с фотографий, именно они могут сказать кто изображён на них, получить круг общения, места времяпрепровождения. Комментарии под ними также могут нести определённую информацию. Стоит обратить внимание, что к изображениям могут быть прикреплены геометки и хештеги, а также пользователи "Вконтакте".
        </Typography>
        <Typography gutterBottom>
        2. После чего изучить необходимо сведения, которые оставил пользователь социальной сети - работа, место жительства, дата рождения. Записи на страницы также, как и фотографии могут нести - комментарии, лайки, геометки, хештеги и другие сведения.
        </Typography>
        <Typography gutterBottom>
        3. Исследование списка друзей также несёт обязательно. Именно они могут сказать, где большинство близкого круга живёт, какой возраст. В списке друзей могут быть пометки "родственник", "друг по школе" и т.д.
        </Typography>
        <Typography gutterBottom>
        4. Также часть комментариев оставленных в социальной сети могут быть получены способом описанно в пункте 2. "Поиск профиля"
        </Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={classes.textCenter}>
      <Typography gutterBottom >
        1.Использование дополнительных сервисов сильно облегчает работу исследователя
        </Typography>
        <Typography gutterBottom variant="h6">
          В случае, если страница малоифнормативна. То есть вероятность, что ранее пользователь её размщал. Поэтому есть три способа её получить:
         </Typography>
         <Typography gutterBottom>
          а) Использование кешированной версии поисковыми системами Gooogle, Yandex и других с помощью поискового запроса : "site:vk.com/ *", либо "inurl:vk.com/*", где в первом варианте может быть указан как id, логин или имя и фимилия, а во втором только id или логин.
         </Typography>
        <Typography gutterBottom>
          б) Сервис <a href="vk.com/search">vk.watch</a> позволяет просмотреть на протяжении определённого времени, как выглядела страница, а также получить доступ ко всей информации(комментарии, друзья, заполненная информация) и фотографиям, которые были на тот момент.
        </Typography>
        <Typography gutterBottom>
        <img src="img/vk/10.png" style={{maxWidth: '700px'}}></img> 
        </Typography>
        <Typography gutterBottom>
          в) Использование сохранённой версии страницы в <a href="https://web.archive.org">Waybackmachine </a>, где в строку поиска ввести url адрес страницы.
        </Typography>
        <Typography gutterBottom variant="h6">
          Также дополнительно может быть получена информации
         </Typography>
         <Typography gutterBottom >
          О врмени проведённом в социальной сети, таким образом можно сказать когда человек спит/бодрствует и когда у него свободное время.
         </Typography>
         <Typography gutterBottom >
          Для этого можно использовать <a href="http://vk.city4me.com">City4me </a> и <a href="https://220vk.com">220vk</a>
         </Typography>
         <Typography gutterBottom>
        <img src="img/vk/11.png" style={{maxWidth: '700px'}}></img> 
        </Typography>
         <Typography gutterBottom >
          Эти же сервисы демонстрируют также ряд полезных функций для исследователя, среди которых: поиск скрытых друзей и групп, просмотр оставленных комментариев и записи, которые были отмечены лайком. А также анализ друзей пользователя на город проживания и даты рождения.
         </Typography>
         <Typography gutterBottom >
          В определённых ситуациях может понадобиться установить взаимосвязь между двумя людьми, для этого также пригодиться указанный в параграфе "Поиск профиля" <a href="https://yasiv.com/vk">yasiv</a> и <a href="https://220vk.com">220vk</a>
         </Typography>
         <Typography gutterBottom variant="h6">
          Важным действием является - обратить внимание на логин/никнейм пользователя, указанный на странице. Так как он может быть использован в других социальных сетях или на других ресурсах.
         </Typography>
      </div>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
      <Menu/>
    </div>
  );
}



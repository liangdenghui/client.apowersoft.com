import React, { Component } from 'react';
import 'assets/css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ActiveContent } from 'components/content'
import { LeftSideBar } from 'components/leftSideBar'
 //react 国际化
 import {IntlProvider} from 'react-intl'
 //语言包个人配置
 import cs from 'locale/cs'
 import da from 'locale/da'
 import de from 'locale/de'
 import el from 'locale/el'
 import en from 'locale/en'
 import es from 'locale/es'
 import fi from 'locale/fi'
 import fr from 'locale/fr'
 import hu from 'locale/hu'
 import it from 'locale/it'
 import ja from 'locale/ja'
 import nl from 'locale/nl'
 import no from 'locale/it'
 import pl from 'locale/pl'
 import pt from 'locale/pt'
 import sv from 'locale/sv'
 import tr from 'locale/tr'
 import tw from 'locale/tw'
 import zh from 'locale/zh'
 import intl from 'intl';
 ///react-intl 国际语言包
//  import zh from 'react-intl/locale-data/zh'
//  import en from 'react-intl/locale-data/en'
//  addLocaleData([...en, ...zh]);
//语言初始化
function chooseLocale(){
    console.log(navigator.language.split('-')[0])
    switch(navigator.language.split('-')[0]){
        case 'cs':
            return cs;
            break;
        case 'da':
            return da;
            break;
        case 'de':
            return de;
            break;
        case 'el':
            return el;
            break;
        case 'en':
            return en;
            break;
        case 'es':
            return es;
            break;
        case 'fi':
            return fi;
            break;
        case 'fr':
            return fr;
            break;
        case 'hu':
            return hu;
            break;
        case 'it':
            return it;
            break;
        case 'ja':
            return ja;
            break;
        case 'nl':
            return nl;
            break;
        case 'no':
            return no;
            break;
        case 'pl':
            return pl;
            break;
        case 'pt':
            return pt;
            break;
        case 'sv':
            return sv;
            break; 
        case 'tr':
            return tr;
            break;
        case 'tw':
            return tw;
            break;
        case 'zh':
            return zh;
            break;
        default:
            return en;
            break;
    } 
}
class App extends Component {
    render() {
        return (
            <IntlProvider locale={'zh'} messages={zh}>
                <Router>
                    <div id ='app'> 
                        <LeftSideBar></LeftSideBar>
                        <ActiveContent> </ActiveContent>       
                    </div>
                </Router>
            </IntlProvider>
        )
    }
}
export default App;


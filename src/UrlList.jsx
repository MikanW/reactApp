import {Link,
        BrowserRouter as Router,
        Route,
        Routes
} from 'react-router-dom';

const cookBookList = [  {'name':'红薯玉米挞',
                         'url':'%PUBLIC_URL%/cookBook/swtPttCrnTrt.html'
                    }];

const UrlList = (props) => {

    var getlist = function (type) {
        let retList = null;
        
        switch (type) {
            case 'cookBook':
                retList = cookBookList;
                break;
        
            default:
                break;
        }
        return retList;
    };

    var list = getlist(props.category);
    
    const listItems = list.map((item) =>
        //<il><a href={item.url}>{item.name}</a></il>
            <td>
                <button onClick={()=>{const w=window.open('about:blank');w.location.href=item.url}} className="link-button">
                    {item.name}
                </button>
            </td>
    );

    return(
        <>{listItems}</>
    );
    //return <a href="../public/cookBook/swtPttCrnTrt.html">hoongshu</a>;

};

export default UrlList;
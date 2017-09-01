import * as React from 'react';
import Avd from 'common/avd';
import App from 'route/home';
import 'style/common.less';
import user from 'store/user'; 

import qs from 'query-string';
const query = qs.parse(location.search);

const app = new Avd();

app.store(user);

app.router(()=><App query={query}/>);

app.start('#stage');
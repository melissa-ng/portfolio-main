import { Fragment } from 'react';

import Navigation from './navigation';
import FloatingActionButtons from './floaters';

function Layout(props) {
	return (
		<Fragment>
			<Navigation />
			<main>{props.children}</main>
            <FloatingActionButtons />
		</Fragment>
	);
}

export default Layout;
 import React from 'react';
 import Aux from '../../hoc/Aux'

const layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.childern}
        </main>
    </Aux>
);

export default layout;

/*
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 *
 */

import React from 'react';
import EnhancedTable from '../commons/EnhancedTable';

export default class Endpoints extends React.Component {
    constructor(props){
        super(props)
        this.state = { pageInfo: {
                pageId: "endpoints",
                title: "Endpoints",
                headCells: [
                    {id: 'name', label: 'Endpoint Name'},
                    {id: 'nodes', label: 'Nodes'},
                    {id: 'type', label: 'Type'},
                    {id: 'state', label: 'State'}],
                tableOrderBy: 'service'
            },
            endpointList: [{
                name: "Calculator EP",
                nodes: [
                    { nodeId: "node_01",
                        type: "http",
                        state: true

                    },
                    { nodeId: "node_02",
                        type: "http",
                        state: false

                    }
                ]
            }
            ]};
    }
    render() {
        return <div>This page is under developement</div>
        // return <EnhancedTable pageInfo={this.state.pageInfo} dataSet={this.state.endpointList}/>;
    }
}

/*
 * Copyright (C) 2011 Flamingo Project (http://www.cloudine.io).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Ext.define('Flamingo2.view.pig.editor.EditorModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.pigEditorModel',

    stores: {
        pigQueryResults: {
            requires: ['Flamingo2.view.component.DynamicReader'],
            fields: [],
            autoLoad: false,
            pageSize: 100,
            proxy: {
                type: 'ajax',
                totalProperty: 'total',
                url: '/pig/query/results.json',
                headers: {
                    'Accept': 'application/json'
                },
                extraParams: {},
                reader: {
                    type: 'dynamicReader',
                    rootProperty: 'list'
                }
            },
            listeners: {
                metachange: 'onQueryResultsMetachange'
            }
        }
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});


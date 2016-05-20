/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A color picker as form field. Can be used inside a editable grid.
 */
Ext.define('NLeSC.eEcology.form.field.Color', {
    extend: Ext.form.field.Picker ,
    alias: 'widget.colorfield',
                                   
    triggerCls : Ext.baseCSSPrefix + 'form-date-trigger',
    matchFieldWidth: false,
    allowBlank: false,
    maskRe: /[0-9A-F]/,
    colors: [
         '000000', '993300', '333300', '003300', '003366', '000080', '333399', '333333',
         '800000', 'FF6600', '808000', '008000', '008080', '0000FF', '666699', '808080',
         'FF0000', 'FF9900', '99CC00', '339966', '33CCCC', '3366FF', '800080', '969696',
         'FF00FF', 'FFCC00', 'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0',
         'FF99CC', 'FFCC99', 'FFFF99', 'CCFFCC', 'CCFFFF', '99CCFF', 'CC99FF', 'FFFFFF'
    ],
    pickerCls: Ext.baseCSSPrefix + 'form-color-picker',
    createPicker: function() {
        var me = this;

        return Ext.create('Ext.picker.Color', {
            pickerField: me,
            ownerCt: me.ownerCt,
            renderTo: document.body,
            floating: true,
            hidden: true,
            focusOnShow: true,
            colors: me.colors,
            cls: me.pickerCls,
            listeners: {
                select: me.onSelect,
                scope: me
            },
            keyNavConfig: {
                esc: function() {
                    me.collapse();
                }
            }
        });
    },
    onSelect: function(m, d) {
        var me = this;

        me.setValue(d);
        me.setFieldStyle({background: '#'+d});
        me.fireEvent('select', me, d);
        me.collapse();
    },
    /**
     * @private
     * Sets the Date picker's value to match the current field value when expanding.
     */
    onExpand: function() {
        var d = this.getValue();
        this.picker.select(d, true);
    },
    validator: function() {
        var d = this.getValue();
        if (/^[0-9A-F]{6}$/.test(d)) {
            return true;
        }
        return 'Color format is RRGGBB-digit hex code';
    }
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Combo to select a tracker.
 *
 * # Example usage (requires trackers.json file in /):
 *
 *     @example
 *     var store = Ext.create('NLeSC.eEcology.store.TrackerIds', {
 *         storeId: 'TrackerIds'
 *     });
 *     store.getProxy().url = '/trackers.json';
 *     Ext.create('NLeSC.eEcology.form.field.TrackerCombo', {
 *         renderTo: Ext.getBody()
 *         labelWidth: 50,
 *         width: 110,
 *         store: 'TrackerIds',
 *         queryMode: 'remote',
 *         triggerAction: 'all',
 *         typeAhead: true
 *     });
 */
Ext.define('NLeSC.eEcology.form.field.TrackerCombo', {
    extend:  Ext.form.field.ComboBox ,
    alias: 'widget.trackercombo',
    store: 'trackers',
    displayField: 'id',
    allowBlank: false,
    fieldLabel: 'Tracker',
    labelAttrTpl : 'data-qtip="Tracker identifier aka device_info_serial"',
    name: 'id'
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Project model.
 */
Ext.define('NLeSC.eEcology.model.Project', {
    extend:  Ext.data.Model ,
    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'text',
        type: 'string'
    }]
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Store with projects.
 */
Ext.define('NLeSC.eEcology.store.Projects', {
    extend:  Ext.data.Store ,
    storeId: 'projects',
    model: 'NLeSC.eEcology.model.Project',
    proxy: {
        type: 'ajax',
        url : '../../projects.json',
        reader: {
            type: 'json'
        }
    },
    sorters: [{
         property: 'id',
         direction: 'ASC'
    }]
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Species model.
 */
Ext.define('NLeSC.eEcology.model.Species', {
    extend:  Ext.data.Model ,
    fields: [{
        name: 'id',
        type: 'string'
    }, {
        name: 'text',
        type: 'string'
    }]
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Store with species.
 */
Ext.define('NLeSC.eEcology.store.Species', {
    extend:  Ext.data.Store ,
    storeId: 'species',
    model: 'NLeSC.eEcology.model.Species',
    proxy: {
        type: 'ajax',
        url : '../../species.json',
        reader: {
            type: 'json'
        }
    },
    sorters: [{
         property: 'id',
         direction: 'ASC'
    }]
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Tracker model.
 */
Ext.define('NLeSC.eEcology.model.Tracker', {
    extend:  Ext.data.Model ,
    fields: [{
        name: 'id',
        type: 'int'
    }, 'species', 'project']
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Store for tracker identifiers.
 */
Ext.define('NLeSC.eEcology.store.Trackers', {
    extend:  Ext.data.Store ,
    storeId: 'trackers',
    model: 'NLeSC.eEcology.model.Tracker',
    proxy: {
        type: 'ajax',
        url : '../../trackers.json',
        reader: {
            root: 'trackers',
            type: 'json'
        },
        writer: 'json'
    },
    sorters: [{
         property: 'id',
         direction: 'ASC'
    }]
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Grid of filterable trackers.
 */
Ext.define('NLeSC.eEcology.grid.Trackers', {
    extend:  Ext.grid.Panel ,
    alias: 'widget.trackersgrid',
                                                                               
                                                                           
    features: [{
        ftype: 'filters',
        local: true
    }],
    store: 'trackers',
    columns: [{
        text: "ID",
        sortable: true,
        dataIndex: 'id',
        filter: {
            type: 'numeric'
        }
    }, {
        text: "Species",
        flex: 1,
        sortable: true,
        dataIndex: 'species',
        filter: {
            type: 'list',
            store: 'species'
        }
    }, {
        text: "Project",
        flex: 1,
        sortable: true,
        dataIndex: 'project',
        filter: {
            type: 'list',
            store: 'projects'
        }
    }],
    initComponent: function() {
        // Convert store identifiers to actual stores
        this.columns.forEach(function(c) {
            if ('filter' in c && 'store' in c.filter && typeof c.filter.store === 'string') {
                c.filter.store = Ext.StoreManager.lookup(c.filter.store);
            }
        });
        this.callParent();
    }
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Grid of trackers as form field. Must select a tracker to be valid.
 */
Ext.define('NLeSC.eEcology.form.field.TrackerGrid', {
    extend:  Ext.form.FieldContainer ,
                                               
    mixins: {
        field:  Ext.form.field.Field 
    },
    /**
     * Grid to show.
     */
    grid: {
        xtype: 'trackersgrid'
    },
    alias: 'widget.trackergridfield',
    fieldLabel: 'Tracker',
    name: 'id',
    /**
     * @cfg {blankText} string
     *
     * Error text to display if no tracker is selected.
     */
    blankText: 'No tracker selected',
    msgTarget: 'under',
    defaults: {flex: 1},
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    autoWidth: true,
    height: 300,
    initComponent: function() {
        this.grid.selModel = Ext.create('Ext.selection.CheckboxModel', {
            mode: 'SINGLE',
            showHeaderCheckbox: false
        });
        this.grid.selModel.on('selectionchange', this.onSelectionChange, this);
        this.items = [this.grid];
        this.callParent();
        this.initField();
    },
    getSelectionModel: function() {
        return this.grid.selModel;
    },
    getValue: function() {
        var model =  this.getSelectionModel();
        if (model.hasSelection()) {
            return model.getSelection()[0].getId();
        }
        return null;
    },
    setValue: function(value) {
        var model =  this.getSelectionModel();
        var store = model.getStore();
        if (store === undefined) {
            // Unable to setValue, store not initiated yet
            return;
        }
        var record = store.getById(value);
        model.select(record);
        this.mixins.field.setValue.call(this, value);
    },
    getErrors: function() {
        var value = this.getValue();
        if (value === null) {
            return [this.blankText];
        }
        return [];
    },
    reset: function() {
        var model =  this.getSelectionModel();
        model.deselectAll();
    },
    onSelectionChange: function(model, selections) {
        if (selections.length > 0) {
            this.setValue(selections[0].getId());
        }
    },
    isValid : function() {
        var me = this,
            disabled = me.disabled,
            validate = me.forceValidation || !disabled;

        return validate ? me.validateValue(me.value) : disabled;
    },

    validateValue: function(value) {
        var me = this,
            errors = me.getErrors(value),
            isValid = Ext.isEmpty(errors);

        if (!me.preventMark) {
            if (isValid) {
                me.clearInvalid();
            } else {
                me.markInvalid(errors);
            }
        }
        return isValid;
    },

    markInvalid : function(errors) {
        // Save the message and fire the 'invalid' event
        var me = this,
            oldMsg = me.getActiveError();
        me.setActiveErrors(Ext.Array.from(errors));
        if (oldMsg !== me.getActiveError()) {
            me.updateLayout();
        }
    },
    /**
     * @private
     * Clear any invalid styles/messages for this field.
     *
     * __Note:__ this method does not cause the Field's {@link #validate} or {@link #isValid} methods to return `true`
     * if the value does not _pass_ validation. So simply clearing a field's errors will not necessarily allow
     * submission of forms submitted with the {@link Ext.form.action.Submit#clientValidation} option set.
     */
    clearInvalid : function() {
        // Clear the message and fire the 'valid' event
        var me = this,
            hadError = me.hasActiveError();
        me.unsetActiveError();
        if (hadError) {
            me.updateLayout();
        }
    }
});

/*
 * Copyright 2013 Netherlands eScience Center
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A available trackers grid and a customizable selected trackers grid.
 * Use drag/drop or doublclick or button to move trackers between grids.
 */
Ext.define('NLeSC.eEcology.form.field.TrackerSelector', {
    extend:  Ext.form.FieldContainer ,
    alias: 'widget.trackergridselector',
    fieldLabel: 'Trackers',
    name: 'trackers',
    labelAttrTpl : 'data-qtip="Selected tracker identifiers with additional data"',
    mixins: {
        bindable:  Ext.util.Bindable ,
        field:  Ext.form.field.Field 
    },
               
                            
                                       
                                    
      
                                       
    /**
     * @cfg {Object} fromGrid (required)
     * Grid config object used as from Grid.
     */

    /**
     * @cfg {Object} toGrid (required)
     * Grid config object used as to Grid.
     */

    /**
     * @cfg String [dragText="{0} Item{1}"] The text to show while dragging items.
     * {0} will be replaced by the number of items. {1} will be replaced by the plural
     * form if there is more than 1 item.
     */
    dragText: '{0} Tracker{1}',
    msgTarget: 'under',
    value: [],
    /**
     * @cfg {Boolean} [allowBlank=false] `false` to require at least one item in the list to be selected, `true` to allow no
     * selection.
     */
    allowBlank: false,
    /**
     * @cfg {String} [blankText="This field is required"] Default text displayed when the control contains no items.
     */
    blankText: 'One or more selected trackers are required',
    /**
     * @cfg {Boolean} [hideNavIcons=false] True to hide the navigation icons
     */
    hideNavIcons:false,
    /**
     * @cfg {Array} buttons Defines the set of buttons that should be displayed in between the ItemSelector
     * fields. Defaults to <tt>['top', 'up', 'add', 'remove', 'down', 'bottom']</tt>. These names are used
     * to build the button CSS class names, and to look up the button text labels in {@link #buttonsText}.
     * This can be overridden with a custom Array to change which buttons are displayed or their order.
     */
    buttons: ['top', 'up', 'add', 'remove', 'down', 'bottom'],

    /**
     * @cfg {Object} buttonsText The tooltips for the {@link #buttons}.
     * Labels for buttons.
     */
    buttonsText: {
        top: "Move to Top",
        up: "Move Up",
        add: "Add to Selected",
        remove: "Remove from Selected",
        down: "Move Down",
        bottom: "Move to Bottom"
    },
    defaults: {flex: 1},
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    autoWidth: true,
    height: 300,
    initComponent: function() {
        var me = this;
        me.items = me.setupItems();
        me.callParent();
        me.initField();
    },
    createList: function(grid) {
        var me = this;

        grid.disabled = me.disabled;
        grid.margins = '0 2 0 0';

        if (!grid.viewConfig) {
            grid.viewConfig = {};
        }
        if (!grid.viewConfig.plugins) {
            grid.viewConfig.plugins = [];
        }
        if (Ext.isObject(grid.viewConfig.plugins)) {
            grid.viewConfig.plugins = [grid.viewConfig.plugins];
        }
        grid.viewConfig.plugins.push({
            ptype: 'gridviewdragdrop',
            ddGroup: me.ddGroup,
            dragText: me.dragText
        });

        var field = Ext.create('Ext.grid.Panel', grid);
        field.addListener('itemdblclick', me.onItemDblClick, me);
        field.getView().addListener('drop', me.onSelectedDrop, me);

        return field;
    },
    createButtons: function() {
        var me = this,
        buttons = [];

        if (!me.hideNavIcons) {
            Ext.Array.forEach(me.buttons, function(name) {
                buttons.push({
                    xtype: 'button',
                    tooltip: me.buttonsText[name],
                    handler: me['on' + Ext.String.capitalize(name) + 'BtnClick'],
                    cls: Ext.baseCSSPrefix + 'form-itemselector-btn',
                    iconCls: Ext.baseCSSPrefix + 'form-itemselector-' + name,
                    navBtn: true,
                    scope: me,
                    margin: '4 0 0 0'
                });
            });
        }
        return buttons;
    },
    createFromGrid: function() {
        var me  = this;
        var grid = Ext.create('NLeSC.eEcology.grid.Trackers', {
            title: 'Available',
            multiSelect: true,
            disabled: me.disabled,
            margins: '0 2 0 0',
            viewConfig: {
                plugins: [{
                    ptype: 'gridviewdragdrop',
                    ddGroup: me.ddGroup,
                    dragText: me.dragText
                }]
            }
        });
        grid.addListener('itemdblclick', me.onItemDblClick, me);
        grid.getView().addListener('drop', me.onAvailableDrop, me);

        return grid;
    },
    createToGridConfig: function() {
        var me  = this;
        var store = Ext.create('Ext.data.Store', {
            model: me.fromField.getStore().model
        });
        var columns = [];
        me.fromField.columns.forEach(function(col) {
           columns.push(col.cloneConfig());
        });
        return {
            title: 'Selected',
            store: store,
            multiSelect: true,
            columns: columns
        };
    },
    setupItems: function() {
        var me = this;

        me.ddGroup = 'TrackerGridSelectorDD-'+Ext.id();

        me.fromField = me.createFromGrid();

        if (!('toGrid' in me)) {
            me.toGrid =  me.createToGridConfig();
        }

        if (!me.toGrid.viewConfig) {
            me.toGrid.viewConfig = {};
        }
        me.toGrid.viewConfig.emptyText = me.blankText;
        me.toGrid.viewConfig.deferEmptyText = false;

        me.toField = me.createList(me.toGrid);

        var toStore = me.toField.store;
        toStore.on('add', this.add2SelectedStore, this);

        return [
            me.fromField,
            {
                xtype: 'container',
                margins: '0 4',
                flex: 0,
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: me.createButtons()
            },
            me.toField
        ];
    },
    /**
     * @private
     *
     * The selected model can have more fields than the available model.
     * So add missing fields and their default values to newly selected records.
     */
    add2SelectedStore: function(store, recs) {
        var defaultRec = Ext.create(store.model);

        recs.forEach(function(rec) {
            defaultRec.fields.each(function(field) {
                if (!(field.name in rec.fields.keys)) {
                    rec.fields.add(field);
                }
                if (!(field.name in rec.data)) {
                    rec.set(field.name, field.defaultValue);
                }
            });
        });
    },
    /**
     * Get the selected records from the specified list.
     *
     * Records will be returned *in store order*, not in order of selection.
     * @param {Ext.grid.Panel} list The list to read selections from.
     * @return {Ext.data.Model[]} The selected records in store order.
     *
     */
    getSelections: function(list) {
        var store = list.getStore();

        return Ext.Array.sort(list.getSelectionModel().getSelection(), function(a, b) {
            a = store.indexOf(a);
            b = store.indexOf(b);

            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            return 0;
        });
    },

    onTopBtnClick : function() {
        var list = this.toField,
            store = list.getStore(),
            selected = this.getSelections(list);

        store.suspendEvents();
        store.remove(selected, true);
        store.insert(0, selected);
        store.resumeEvents();
        list.getSelectionModel().select(selected);
        this.syncValue();
    },

    onBottomBtnClick : function() {
        var list = this.toField,
            store = list.getStore(),
            selected = this.getSelections(list);

        store.suspendEvents();
        store.remove(selected, true);
        store.add(selected);
        store.resumeEvents();
        list.getSelectionModel().select(selected);
        this.syncValue();
    },

    onUpBtnClick : function() {
        var list = this.toField,
            store = list.getStore(),
            selected = this.getSelections(list),
            rec,
            i = 0,
            len = selected.length,
            index = 0;

        // Move each selection up by one place if possible
        store.suspendEvents();
        for (; i < len; ++i, index++) {
            rec = selected[i];
            index = Math.max(index, store.indexOf(rec) - 1);
            store.remove(rec, true);
            store.insert(index, rec);
        }
        store.resumeEvents();
        list.getSelectionModel().select(selected);
        this.syncValue();
    },

    onDownBtnClick : function() {
        var list = this.toField,
            store = list.getStore(),
            selected = this.getSelections(list),
            rec,
            i = selected.length - 1,
            index = store.getCount() - 1;

        // Move each selection down by one place if possible
        store.suspendEvents();
        for (; i > -1; --i, index--) {
            rec = selected[i];
            index = Math.min(index, store.indexOf(rec) + 1);
            store.remove(rec, true);
            store.insert(index, rec);
        }
        store.resumeEvents();
        list.getSelectionModel().select(selected);
        this.syncValue();
    },

    onAddBtnClick : function() {
        var me = this,
            selected = me.getSelections(me.fromField);

        me.moveRec(true, selected);
        me.toField.getSelectionModel().select(selected);
    },

    onRemoveBtnClick : function() {
        var me = this,
            selected = me.getSelections(me.toField);

        me.moveRec(false, selected);
        me.fromField.getSelectionModel().select(selected);
    },
    onSelectedDrop: function() {
        this.syncValue();
    },
    onAvailableDrop: function() {
        this.syncValue();
    },
    moveRec: function(add, recs) {
        var me = this,
            fromField = me.fromField,
            toField   = me.toField,
            fromStore = add ? fromField.store : toField.store,
            toStore   = add ? toField.store   : fromField.store;

        fromStore.remove(recs);
        toStore.add(recs);
        me.syncValue();
    },

    onItemDblClick: function(view, rec) {
        this.moveRec(view === this.fromField.getView(), rec);
    },

    setValue: function(value) {
        var me = this;
        var fromStore = this.fromField.store;
        var toStore = this.toField.store;

        if (fromStore.getTotalCount()+toStore.getTotalCount() == 0) {
            // fromStore isn't loaded yet, set value after load
            fromStore.addListener('load', function() {
                me.setValue(value);
            }, me, {single: true});
            return;
        }

        // move all previously selected items back to available
        Ext.Array.forEach(toStore.getRange(), function(rec){
            toStore.remove(rec);
            fromStore.add(rec);
        });
        // add value items to selected
        Ext.Array.forEach(value, function(rec){
            if (!(rec.$className)) {
                // convert data to record
                rec = Ext.create(Ext.ModelManager.getModel(toStore.model), rec);
            }
            // If in the from store, move it over
            var fromId = fromStore.data.indexOfKey(rec.getId());
            if (fromId > -1) {
                fromStore.removeAt(fromId);
            }
            toStore.add(rec);
        });
        this.syncValue();
    },
    // Synchronizes the submit value with the current state of the toStore
    syncValue: function() {
        var me = this;
        me.mixins.field.setValue.call(me, me.setupValue(me.toField.store.getRange()));
    },

    onBindStore: function(store, initial) {
        var me = this;

        if (me.fromField) {
            me.fromField.store.removeAll();
            me.toField.store.removeAll();

            // Add everything to the from field as soon as the Store is loaded
            if (store.getCount()) {
                me.populateFromStore(store);
            } else {
                me.store.on('load', me.populateFromStore, me);
            }
        }
    },

    populateFromStore: function(store) {
        var fromStore = this.fromField.store;

        // Flag set when the fromStore has been loaded
        this.fromStorePopulated = true;

        fromStore.add(store.getRange());

        // setValue waits for the from Store to be loaded
        fromStore.fireEvent('load', fromStore);
    },

    onEnable: function(){
        var me = this;

        me.callParent();
        me.fromField.enable();
        me.toField.enable();

        Ext.Array.forEach(me.query('[navBtn]'), function(btn){
            btn.enable();
        });
    },

    onDisable: function(){
        var me = this;

        me.callParent();
        me.fromField.disable();
        me.toField.disable();

        Ext.Array.forEach(me.query('[navBtn]'), function(btn){
            btn.disable();
        });
    },

    onDestroy: function(){
        this.bindStore(null);
        this.callParent();
    },
    setupValue: function(value){
        return value.map(function(r) {
            return r.data;
        });
    },
    getValue: function(){
        return this.setupValue(this.toField.store.data.items) || [];
    },
    /**
     * Returns the value that would be included in a standard form submit for this field.
     *
     * @return {String} The value to be submitted, or `null`.
     */
    getSubmitValue: function() {
        return Ext.JSON.encode(this.getValue());
    },
    isValid : function() {
        var me = this,
            disabled = me.disabled,
            validate = me.forceValidation || !disabled;

        return validate ? me.validateValue(me.value) : disabled;
    },

    validateValue: function(value) {
        var me = this,
            errors = me.getErrors(value),
            isValid = Ext.isEmpty(errors);

        if (!me.preventMark) {
            if (isValid) {
                me.clearInvalid();
            } else {
                me.markInvalid(errors);
            }
        }
        return isValid;
    },

    markInvalid : function(errors) {
        // Save the message and fire the 'invalid' event
        var me = this,
            oldMsg = me.getActiveError();
        me.setActiveErrors(Ext.Array.from(errors));
        if (oldMsg !== me.getActiveError()) {
            me.updateLayout();
        }
    },
    /**
     * Clear any invalid styles/messages for this field.
     *
     * __Note:__ this method does not cause the Field's {@link #validate} or {@link #isValid} methods to return `true`
     * if the value does not _pass_ validation. So simply clearing a field's errors will not necessarily allow
     * submission of forms submitted with the {@link Ext.form.action.Submit#clientValidation} option set.
     */
    clearInvalid : function() {
        // Clear the message and fire the 'valid' event
        var me = this,
            hadError = me.hasActiveError();
        me.unsetActiveError();
        if (hadError) {
            me.updateLayout();
        }
    },

    getErrors: function(value) {
        var me = this;
        var errors = [];
        value = Ext.Array.from(value || me.getValue());
        numSelected = value.length;

        if (!me.allowBlank && numSelected < 1) {
            errors.push(me.blankText);
        }
        return errors;
    }
});



Ext.data.JsonP.NLeSC_eEcology_form_field_Color({"tagname":"class","name":"NLeSC.eEcology.form.field.Color","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Color.js","href":"Color.html#NLeSC-eEcology-form-field-Color"}],"aliases":{"widget":["colorfield"]},"alternateClassNames":[],"extends":"Ext.form.field.Picker","mixins":[],"requires":["Ext.picker.Color"],"uses":[],"members":[{"name":"allowBlank","tagname":"property","owner":"NLeSC.eEcology.form.field.Color","id":"property-allowBlank","meta":{"private":true}},{"name":"colors","tagname":"property","owner":"NLeSC.eEcology.form.field.Color","id":"property-colors","meta":{"private":true}},{"name":"maskRe","tagname":"property","owner":"NLeSC.eEcology.form.field.Color","id":"property-maskRe","meta":{"private":true}},{"name":"matchFieldWidth","tagname":"property","owner":"NLeSC.eEcology.form.field.Color","id":"property-matchFieldWidth","meta":{"private":true}},{"name":"pickerCls","tagname":"property","owner":"NLeSC.eEcology.form.field.Color","id":"property-pickerCls","meta":{"private":true}},{"name":"triggerCls","tagname":"property","owner":"NLeSC.eEcology.form.field.Color","id":"property-triggerCls","meta":{"private":true}},{"name":"createPicker","tagname":"method","owner":"NLeSC.eEcology.form.field.Color","id":"method-createPicker","meta":{"private":true}},{"name":"onExpand","tagname":"method","owner":"NLeSC.eEcology.form.field.Color","id":"method-onExpand","meta":{"private":true}},{"name":"onSelect","tagname":"method","owner":"NLeSC.eEcology.form.field.Color","id":"method-onSelect","meta":{"private":true}},{"name":"validator","tagname":"method","owner":"NLeSC.eEcology.form.field.Color","id":"method-validator","meta":{"private":true}}],"code_type":"ext_define","id":"class-NLeSC.eEcology.form.field.Color","short_doc":"A color picker as form field. ...","component":false,"superclasses":["Ext.form.field.Picker"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.field.Picker<div class='subclass '><strong>NLeSC.eEcology.form.field.Color</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.picker.Color</div><h4>Files</h4><div class='dependency'><a href='source/Color.html#NLeSC-eEcology-form-field-Color' target='_blank'>Color.js</a></div></pre><div class='doc-contents'><p>A color picker as form field. Can be used inside a editable grid.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-allowBlank' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-property-allowBlank' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-property-allowBlank' class='name expandable'>allowBlank</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-colors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-property-colors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-property-colors' class='name expandable'>colors</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>['000000', '993300', '333300', '003300', '003366', '000080', '333399', '333333', '800000', 'FF6600', '808000', '008000', '008080', '0000FF', '666699', '808080', 'FF0000', 'FF9900', '99CC00', '339966', '33CCCC', '3366FF', '800080', '969696', 'FF00FF', 'FFCC00', 'FFFF00', '00FF00', '00FFFF', '00CCFF', '993366', 'C0C0C0', 'FF99CC', 'FFCC99', 'FFFF99', 'CCFFCC', 'CCFFFF', '99CCFF', 'CC99FF', 'FFFFFF']</code></p></div></div></div><div id='property-maskRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-property-maskRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-property-maskRe' class='name expandable'>maskRe</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/[0-9A-F]/</code></p></div></div></div><div id='property-matchFieldWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-property-matchFieldWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-property-matchFieldWidth' class='name expandable'>matchFieldWidth</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-pickerCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-property-pickerCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-property-pickerCls' class='name expandable'>pickerCls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + 'form-color-picker'</code></p></div></div></div><div id='property-triggerCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-property-triggerCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-property-triggerCls' class='name expandable'>triggerCls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + 'form-date-trigger'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createPicker' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-method-createPicker' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-method-createPicker' class='name expandable'>createPicker</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-onExpand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-method-onExpand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-method-onExpand' class='name expandable'>onExpand</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Sets the Date picker's value to match the current field value when expanding. ...</div><div class='long'><p>Sets the Date picker's value to match the current field value when expanding.</p>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-onSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-method-onSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-method-onSelect' class='name expandable'>onSelect</a>( <span class='pre'>m, d</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>m</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>d</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li>select</li></ul></div></div></div><div id='method-validator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.form.field.Color'>NLeSC.eEcology.form.field.Color</span><br/><a href='source/Color.html#NLeSC-eEcology-form-field-Color-method-validator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.form.field.Color-method-validator' class='name expandable'>validator</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div></div></div></div></div>","meta":{}});
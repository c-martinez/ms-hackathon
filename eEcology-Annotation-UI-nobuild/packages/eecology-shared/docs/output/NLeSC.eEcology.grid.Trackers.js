Ext.data.JsonP.NLeSC_eEcology_grid_Trackers({"tagname":"class","name":"NLeSC.eEcology.grid.Trackers","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Trackers.js","href":"Trackers.html#NLeSC-eEcology-grid-Trackers"}],"aliases":{"widget":["trackersgrid"]},"alternateClassNames":[],"extends":"Ext.grid.Panel","mixins":[],"requires":["Ext.ux.grid.FiltersFeature","NLeSC.eEcology.store.Projects","NLeSC.eEcology.store.Species","NLeSC.eEcology.store.Trackers"],"uses":[],"members":[{"name":"columns","tagname":"property","owner":"NLeSC.eEcology.grid.Trackers","id":"property-columns","meta":{"private":true}},{"name":"features","tagname":"property","owner":"NLeSC.eEcology.grid.Trackers","id":"property-features","meta":{"private":true}},{"name":"store","tagname":"property","owner":"NLeSC.eEcology.grid.Trackers","id":"property-store","meta":{"private":true}},{"name":"initComponent","tagname":"method","owner":"NLeSC.eEcology.grid.Trackers","id":"method-initComponent","meta":{"private":true}}],"code_type":"ext_define","id":"class-NLeSC.eEcology.grid.Trackers","component":false,"superclasses":["Ext.grid.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.Panel<div class='subclass '><strong>NLeSC.eEcology.grid.Trackers</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.ux.grid.FiltersFeature</div><div class='dependency'><a href='#!/api/NLeSC.eEcology.store.Projects' rel='NLeSC.eEcology.store.Projects' class='docClass'>NLeSC.eEcology.store.Projects</a></div><div class='dependency'><a href='#!/api/NLeSC.eEcology.store.Species' rel='NLeSC.eEcology.store.Species' class='docClass'>NLeSC.eEcology.store.Species</a></div><div class='dependency'><a href='#!/api/NLeSC.eEcology.store.Trackers' rel='NLeSC.eEcology.store.Trackers' class='docClass'>NLeSC.eEcology.store.Trackers</a></div><h4>Files</h4><div class='dependency'><a href='source/Trackers.html#NLeSC-eEcology-grid-Trackers' target='_blank'>Trackers.js</a></div></pre><div class='doc-contents'><p>Grid of filterable trackers.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-columns' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.grid.Trackers'>NLeSC.eEcology.grid.Trackers</span><br/><a href='source/Trackers.html#NLeSC-eEcology-grid-Trackers-property-columns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.grid.Trackers-property-columns' class='name expandable'>columns</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{text: &quot;ID&quot;, sortable: true, dataIndex: 'id', filter: {type: 'numeric'}}, {text: &quot;Species&quot;, flex: 1, sortable: true, dataIndex: 'species', filter: {type: 'list', store: 'species'}}, {text: &quot;Project&quot;, flex: 1, sortable: true, dataIndex: 'project', filter: {type: 'list', store: 'projects'}}]</code></p></div></div></div><div id='property-features' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.grid.Trackers'>NLeSC.eEcology.grid.Trackers</span><br/><a href='source/Trackers.html#NLeSC-eEcology-grid-Trackers-property-features' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.grid.Trackers-property-features' class='name expandable'>features</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{ftype: 'filters', local: true}]</code></p></div></div></div><div id='property-store' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.grid.Trackers'>NLeSC.eEcology.grid.Trackers</span><br/><a href='source/Trackers.html#NLeSC-eEcology-grid-Trackers-property-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.grid.Trackers-property-store' class='name expandable'>store</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'trackers'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initComponent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NLeSC.eEcology.grid.Trackers'>NLeSC.eEcology.grid.Trackers</span><br/><a href='source/Trackers.html#NLeSC-eEcology-grid-Trackers-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NLeSC.eEcology.grid.Trackers-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div></div></div></div></div>","meta":{}});
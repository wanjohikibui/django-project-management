Ext.QuickTips.init();

Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

Ext.namespace('Ext.ux.tree');
Ext.ux.tree.State = function(config) {
   Ext.apply(this, config);
};
Ext.extend(Ext.ux.tree.State, Ext.util.Observable, {
   init: function(tree) {
      this.tree = tree;
      this.stateName = 'TreePanelState_' + this.tree.id;
      this.idField = this.idField || 'id';
      this.provider = Ext.state.Manager.getProvider() || new Ext.state.CookieProvider();
      this.state = this.provider.get(this.stateName, {});
      this.tree.on({
         scope: this,
         collapsenode: this.onCollapse,
         expandnode: this.onExpand,
         append: this.onNodeAdded
      });
   },
    
   saveState : function(newState) {
      this.state = newState || this.state;
      this.provider.set(this.stateName, this.state);
   },
    
   onNodeAdded: function(tree, parentNode, node, index) {	
      switch (this.state[node.id]) {
         case 'C': 
            node.expanded = false; 
            break;
         case 'E': 
            node.expanded = true; 
            break;
      };
   },
   
   onExpand: function(node) {
      this.state[node.id] = 'E';
      this.saveState();
   },
   
   onCollapse: function(node) {
      this.state[node.id] = 'C';
      this.saveState();
   }

});

Ext.DatePicker.prototype.startDay = 1;


// Function for Ajax mouseover tooltips on form fields
Ext.override(Ext.form.Field, {
    afterRender: function() {
        var label = findLabel(this);
        if(label){                                  
 			if(this.ttEnabled){
            	new Ext.ToolTip({
                	target: label,
                	width: 250,
                	autoLoad: {
                    	url: '/GetDoc/', 
                    	params : { 
                        	field : this.cmsSlug
                    	}
                	}
            	});
			}
       }
       Ext.form.Field.superclass.afterRender.call(this);
       this.initEvents(); 
  }
});

var findLabel = function(field) {  
    var wrapDiv = null;
    var label = null
    wrapDiv = field.getEl().up('div.x-form-item');    
    if(wrapDiv) {
        label = wrapDiv.child('label');        
    }
    if(label) {
        return label;
    }    
}  

// Function for message passing boxes

Ext.message = function(){
    var msgCt;
	function createBox(t, s){
		// Added msg id
        return ['<div class="msg" id="msg" name="msg">',
                '<div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div>',
                '<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc"><h3>', t, '</h3>', s, '</div></div></div>',
                '<div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div>',
                '</div>'].join('');
    }  
	return {
	msg : function(title, format, sec){
            if(!msgCt){
                msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div'}, true);
            }
            
            var s = String.format.apply(String, Array.prototype.slice.call(arguments, 1));
            var m = Ext.DomHelper.append(msgCt, {html:createBox(title, s)}, true);
            // Added The following code to get the <div> height
            var yoffset = document.getElementById("msg").style.height;
            // Then added that value to the yoffset position in alignTo 
            msgCt.alignTo(document, 'br-br', [0,yoffset]);
            m.slideIn('t').pause(sec).ghost("t", {remove:true});
        }  
    }
}();


// Navigation tree
var tree_data = [
					{ text: 'Projects', id: 'projectsNode', leaf: false, children: [{ text: 'View Dashboard', href: "/", leaf: true }]},
  					{ text: 'Work In Progress', id: 'wipNode', leaf: false, children: [{ text: "All WIP Reports", href: "/WIP/", leaf: true}] },
  					{ text: 'Rota', id: 'rotaNode', leaf: false,
    					children: [{ text: "All Rotas", href: "/Rota/ViewAll/", leaf: true}, { text: "My Teams Rota", href: "/Rota/ViewMyTeam/", leaf: true }, { text: "My Rota", href: "/Rota/ViewMyRota/", leaf: true } ]},
  					{ text: 'Documentation', id: 'docNode', leaf: false,
    					children: [{ text: "Help Files", href: "/en/", leaf: true}, { text: "Bugs/Source code", href: "http://code.google.com/p/django-project-management", leaf: true }] },
  					{ text: 'My Account', id: 'accountNode', leaf: false,
    					children: [{ text: "Log out", href: "/accounts/logout/", leaf: true}] }
			
				]

var rootNode = new Ext.tree.AsyncTreeNode({ text: 'Root', children: tree_data });
var tree = new Ext.tree.TreePanel({ root: rootNode, border: false, plugins: [new Ext.ux.tree.State()], rootVisible: false, stateful: true, stateId: "nav_tree"});
	
    	
var center_html_content = { xtype: "panel", contentEl: "center_panel_html", bodyStyle: "padding: 15px;"}
//var new_menu = { xtype: "tbbutton", text: "New", menu: [{ text: "New Project", href: "/Projects/New"}, { text: "New WIP Report", href: "/WIP/NEW" }]}
//var toolbar = new Ext.Toolbar({ items: [ new_menu ] });
var toolbar = new Ext.Toolbar({ items: [ ] });

var center_panel = { xtype: "panel", region: "center", title: "WTMS Traffic", items: [ toolbar, center_html_content ], bodyStyle: "padding: 0px;", autoScroll: true}
var west_panel = { xtype: "panel", title: 'Navigation', region: 'west', margins: '0 0 0 0',
					cmargins: '0 5 0 0', width: 175, minSize: 100, maxSize: 250, items: [ tree ] }
					
					
					

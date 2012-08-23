Ext.define('BABYSTYLE.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype: 'contactform',
	
	requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email'
	],
	
	config: {
		title: 'Contact',
		iconCls: 'user',
		url: '/BABYSTYLE/data/contact.jsp',
		
		items: [
		    {
		    	xtype: 'fieldset',
		    	instructions: '(이메일은 옵션입니다.)',
		    	
				items: [
				    {
				    	xtype: 'textfield',
				    	name: 'name',
				    	label: '성명'
				    },
				    {
				    	xtype: 'emailfield',
				    	name: 'email',
				    	label: '이메일'
				    },
				    {
				    	xtype: 'textareafield',
				    	name: 'message',
				    	label: '메시지'
				    }
				    
				]
		    },
		    {
		    	xtype: 'button',
		    	text: '보내기',
		    	ui: 'confirm',
		    	handler: function() {
		    		this.up('contactform').submit();
		    	}
		    }
		]
	}
});
$(function(){
	// предварительная загрузка изображений
	var klgd = $('<img />').attr('src','images/klngr.png');
	var msk = $('<img />').attr('src','images/msk.png');
	var spb = $('<img />').attr('src','images/spb.png');
			
	$('#imap> a').click(function(event){
		var elId = $(this).attr('id');
			
		switch(elId){
			 case 'klgd' :
				$('#container:not(:has(img))').append(klgd);
				//elImgURI = img_props.klgd.uri;
			 break;
			 case 'spb' :
				$('#container:not(:has(img))').append(spb);
				//elImgURI = img_props.spb.uri;
			 break; 
			 case 'msk' :
				$('#container:not(:has(img))').append(msk);
				//elImgURI = img_props.msk.uri;
			 break;	
			 default: elImgURI = false;
		}
		
		// ширинаконтейнера
		var contwidth = $('#container').width();
		var contheight = $('#container').height();
		
		var w_mrg = contwidth/2 + "px";
		var h_mrg = contheight/2 + "px";
	
		$('#container').show();
		$('#container').css({'margin-left':'-'+w_mrg});
		event.preventDefault();
	});
	$('div#container').click(function(event){
		$('#container img').remove();
		$('#container').hide();
		event.preventDefault();
	});
	
	});

		$("#zhua").hover(function(){
			$(this).find(".fix_a").stop().slideToggle(500);
		})
		$("#zhub").hover(function(){
			$(this).find(".fix_b").stop().slideToggle(500);
		})	
		$("#zhuc").hover(function(){
			$(this).find(".fix_c").stop().slideToggle(500);
		})	
		$("#zhud").hover(function(){
			$(this).find(".fix_d").stop().slideToggle(500);
		})	
		$("#zhue").hover(function(){
			$(this).find(".fix_e").stop().slideToggle(500);
		})	
		$("#zhuh").hover(function(){
			$(this).find(".fix_h").stop().slideToggle(500);
		})	
		$("#zhui").hover(function(){
			$(this).find(".fix_i").stop().slideToggle(500);
		})	
		
		$(".An").hover(function(){
			$(".lia").css("display","block")
		},function(){
			$(".lia").css("display","none")
		})
		$(".Bn").hover(function(){
			$(".lib").css("display","block")
		},function(){
			$(".lib").css("display","none")
		})
		$(".Cn").hover(function(){
			$(".lic").css("display","block")
		},function(){
			$(".lic").css("display","none")
		})	
		$(".Dn").hover(function(){
			$(".lid").css("display","block")
		},function(){
			$(".lid").css("display","none")
		})	
		$(".En").hover(function(){
			$(".lie").css("display","block")
		},function(){
			$(".lie").css("display","none")
		})	
		$(".Fn").hover(function(){
			$(".lif").css("display","block")
		},function(){
			$(".lif").css("display","none")
		})		
		$(".Gn").hover(function(){
			$(".lig").css("display","block")
		},function(){
			$(".lig").css("display","none")
		})			
		$(".Hn").hover(function(){
			$(".lih").css("display","block")
		},function(){
			$(".lih").css("display","none")
		})			
		$(".In").hover(function(){
			$(".lii").css("display","block")
		},function(){
			$(".lii").css("display","none")
		})	
		$(".Jn").hover(function(){
			$(".lij").css("display","block")
		},function(){
			$(".lij").css("display","none")
		})			
		//初始化Swiper对象
		var mySwioer = new Swiper('.swiper',{
			
			//循环滑动
			loop:true,
			
			pagination:'.swiper-pagination',
			// 小圆点点击
			paginationClickable:true,
			nextButton:'.swiper-button-next',
			
			prevButton:'.swiper-button-prev',
			
			//自动轮播
			autoplay:2000,
			autoplayDisableOnInteraction:false,
		});
		
		
				var mySwioer = new Swiper('.swiper2',{
			
			//循环滑动
			loop:true,
			
			pagination:'.swiper-pagination',
			// 小圆点点击
			paginationClickable:true,
			nextButton:'.swiper-button-next',
			
			prevButton:'.swiper-button-prev',
			
			//自动轮播
			autoplay:2000,
			autoplayDisableOnInteraction:false,
		});



	$(".an button").click(function() {
			//获取下标
			index = $(this).index();
			quer.slideTo(index, 500)
		})
		//定义swiper
	var quer = new Swiper('.swiper1', {
		//回调函数，过渡结束时触发，接收Swiper实例作为参数。   
		onTransitionEnd:function() {
			//根据swiper下标添加类
			$(".an button").eq(quer.activeIndex)
		}
	});



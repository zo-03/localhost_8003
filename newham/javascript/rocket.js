$(function(){

    //.accordion5の中のp要素がクリックされたら
	$('.placeholder-spec .btn-open').click(function(){

			//クリックされた.accordion5の中のp要素に隣接するul要素が開いたり閉じたりする。
			$(this).next('.placeholder-table').slideToggle();
			$(this).css('opacity','0');

	});

		$('.placeholder-spec .btn-close').click(function () {

			//クリックされた.closeの親要素の.accordion5の.innerを閉じる。
			$(this).parents('.placeholder-table').slideUp();
			$('.placeholder-spec .btn-open').css('opacity','1');

	});


});

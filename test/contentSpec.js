describe('Test taking a search page hiding blocked sources', () => {
	beforeEach(() => {
		spyOn(document, 'getElementsByTagName').and.returnValue([])
	})

	it('should block 2 search element that contains 2 blocked sources', () => {
		spyOn(window, 'getBlockedSites').and.returnValue(['businessinsider.com', 'dailymail.co.uk', 'dailyexpress.co.uk', 'fool.co.uk'])
		spyOn(document, 'getElementsByClassName').and.returnValue(TestData.getSearchElements(TestData.dailyMail(), TestData.businessInsider()))
		expect(block()).toEqual(2)
	})

	it('should block 2 search element that contains 2 blocked sources and 1 empty value', () => {
		spyOn(window, 'getBlockedSites').and.returnValue(['businessinsider.com', 'dailymail.co.uk', 'dailyexpress.co.uk', 'fool.co.uk'])
		spyOn(document, 'getElementsByClassName').and.returnValue(TestData.getSearchElements(TestData.dailyMail(), TestData.businessInsider(), null))
		expect(block()).toEqual(2)
	})
	
	it('should block 1 search element that contains dailymail.co.uk', () => {
		spyOn(window, 'getBlockedSites').and.returnValue(['businessinsider.com', 'dailymail.co.uk', 'dailyexpress.co.uk', 'fool.co.uk'])
		spyOn(document, 'getElementsByClassName').and.returnValue(TestData.getSearchElements(TestData.dailyMail()))
		expect(block()).toEqual(1)
	})

	it('should block 1 finance element that contains fool.co.uk', () => {
		spyOn(window, 'getBlockedSites').and.returnValue(['businessinsider.com', 'dailymail.co.uk', 'dailyexpress.co.uk', 'fool.co.uk'])
		spyOn(document, 'getElementsByClassName').and.returnValue(TestData.getSearchElements(TestData.financeFool()))
		expect(block()).toEqual(1)
	})
	
	it('should block 0 search elements when no source contains dailymail.co.uk', () => {
		spyOn(window, 'getBlockedSites').and.returnValue(['businessinsider.com', 'dailymail.co.uk', 'dailyexpress.co.uk', 'fool.co.uk'])
		spyOn(document, 'getElementsByClassName').and.returnValue(TestData.getSearchElements(TestData.speedTest()))
		expect(block()).toEqual(0)
	})

	it('should block 0 search elements when search elements null', () => {
		spyOn(window, 'getBlockedSites').and.returnValue(['businessinsider.com', 'dailymail.co.uk', 'dailyexpress.co.uk', 'fool.co.uk'])
		spyOn(document, 'getElementsByClassName').and.returnValue(null)
		expect(block()).toEqual(0)
	})

	it('should block 0 search elements when blockedSources empty', () => {
		spyOn(window, 'getBlockedSites').and.returnValue([])
		spyOn(document, 'getElementsByClassName').and.returnValue(TestData.getSearchElements(TestData.dailyMail()))
		expect(block()).toEqual(0)
	})

	it('should block 0 search elements when blockedSources null', () => {
		spyOn(window, 'getBlockedSites').and.returnValue(null)
		spyOn(document, 'getElementsByClassName').and.returnValue(TestData.getSearchElements(TestData.dailyMail()))
		expect(block()).toEqual(0)
	})
})

describe('Test converting user-entered sources to array', () => {
	it('should take a list of sources and convert it to an array', () => {
		const sources = 'dailymail.co.uk\nbusinessinsider.com\nfool.co.uk\nexpress.co.uk'
		spyOn(document, 'getElementById').and.returnValue(sources)
		expect(sourcesToArray(sources)).toEqual(['dailymail.co.uk', 'businessinsider.com', 'fool.co.uk', 'express.co.uk'])
	})

	it('should take a list of sources with an empty line and convert it to an array', () => {
		const sources = 'dailymail.co.uk\nbusinessinsider.com\nfool.co.uk\nexpress.co.uk\n'
		spyOn(document, 'getElementById').and.returnValue(sources)
		expect(sourcesToArray(sources)).toEqual(['dailymail.co.uk', 'businessinsider.com', 'fool.co.uk', 'express.co.uk'])
	})
})


class TestData {

	static getSearchElements(...searchElements) {
		return [...searchElements]
	}

	static createElement(element) {
		return {'innerHTML': element, 'setAttribute': () => { return }}
	}

	static speedTest() {
		return TestData.createElement(`<div class="g"><h2 class="bNg8Rb">Web results</h2><!--m--><div class="rc" data-hveid="CAEQAA" data-ved="2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQFSgAMAp6BAgBEAA"><div class="r"><a href="https://www.speedtest.net/" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQFjAKegQIARAB"><br><h3 class="LC20lb DKV0Md">Speedtest by Ookla - The Global Broadband Speed Test</h3><div class="TbwUpd NJjxre"><cite class="iUh30 tjvcx">www.speedtest.net</cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 tjvcx">www.speedtest.net</cite></div><div class="eFM0qc"><span><div class="action-menu"><a class="GHDvEf" href="#" id="am-b10" aria-label="Result options" aria-expanded="false" aria-haspopup="true" role="button" jsaction="m.tdd;keydown:m.hbke;keypress:m.mskpe" data-ved="2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ7B0wCnoECAEQAg"><span class="mn-dwn-arw"></span></a><ol class="action-menu-panel" role="menu" tabindex="-1" jsaction="keydown:m.hdke;mouseover:m.hdhne;mouseout:m.hdhue" data-ved="2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQqR8wCnoECAEQAw"><li class="action-menu-item" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:5RD1THTfC6wJ:https://www.speedtest.net/+&amp;cd=11&amp;hl=en&amp;ct=clnk&amp;gl=uk" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:5RD1THTfC6wJ:https://www.speedtest.net/%2B%26cd%3D11%26hl%3Den%26ct%3Dclnk%26gl%3Duk&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQIDAKegQIARAE">Cached</a></li></ol></div></span></div></div></div><div class="s"><div><span class="st"><em>Test</em> your Internet connection bandwidth to locations around the world with this interactive broadband speed <em>test</em> from Ookla.</span><div class="osl">‎<a class="fl" href="https://www.speedtest.net/apps/android" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/apps/android&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ0gIoADAKegQIARAG">Android</a> ·&nbsp;‎<a class="fl" href="https://www.speedtest.net/apps/windows" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/apps/windows&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ0gIoATAKegQIARAH">Windows</a> ·&nbsp;‎<a class="fl" href="https://www.speedtest.net/apps/desktop" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/apps/desktop&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ0gIoAjAKegQIARAI">Speedtest.net Desktop App</a> ·&nbsp;‎<a class="fl" href="https://www.speedtest.net/apps/chrome" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/apps/chrome&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ0gIoAzAKegQIARAJ">Google Chrome</a></div></div></div><div data-base-uri="/search?sxsrf=ALeKk01_wIrnMFncYAzolp7knCQPBrDK8w:1586538851050" id="ed_14" data-ved="2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ2Z0BMAp6BAgBEAo"><div jsname="UTgHCf" class="AUiS2" data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQx40DegQIABAA"><div jsname="d3PE6e" style="display:none"><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAB6BAgAEAE">at&amp;t speed test</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAF6BAgAEAI">what is a good internet speed</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAJ6BAgAEAM">olca speed test</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAN6BAgAEAQ">gigabit speed test</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAR6BAgAEAU">microsoft speed test</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAV6BAgAEAY">speedtest-cli windows</div></div><span jsname="ZnuYW" class="XCKyNd" aria-label="Dismiss suggested follow ups" role="button" tabindex="0"></span><div><div jsname="l1CLDf" class="d8lLoc"><h4 jsname="IaVMje" class="eJ7tvc">People also search for</h4><div jsname="CeevUc" class="hYkSRb"></div></div></div></div></div></div><!--n--></div>`)
	}

	static dailyMail() {
		return TestData.createElement(`<div class="g"><!--m--><div class="rc" data-hveid="CAUQAA" data-ved="2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQFSgAMA56BAgFEAA"><div class="r"><a href="https://www.dailymail.co.uk/sciencetech/article-8204165/New-coronavirus-test-developed-frontline-NHS-workers-diagnose-infection-FOUR-HOURS.html" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.dailymail.co.uk/sciencetech/article-8204165/New-coronavirus-test-developed-frontline-NHS-workers-diagnose-infection-FOUR-HOURS.html&amp;ved=2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQFjAOegQIBRAB"><br><h3 class="LC20lb DKV0Md">New coronavirus test developed for frontline NHS workers can ...</h3><div class="TbwUpd NJjxre"><cite class="iUh30 bc tjvcx">www.dailymail.co.uk › sciencetech › article-8204165 › New-coronavi...</cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 bc tjvcx">www.dailymail.co.uk › sciencetech › article-8204165 › New-coronavi...</cite></div><div class="eFM0qc"><span><div class="action-menu"><a class="GHDvEf" href="#" id="am-b14" aria-label="Result options" aria-expanded="false" aria-haspopup="true" role="button" jsaction="m.tdd;keydown:m.hbke;keypress:m.mskpe" data-ved="2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQ7B0wDnoECAUQBA"><span class="mn-dwn-arw"></span></a><ol class="action-menu-panel" role="menu" tabindex="-1" jsaction="keydown:m.hdke;mouseover:m.hdhne;mouseout:m.hdhue" data-ved="2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQqR8wDnoECAUQBQ"><li class="action-menu-item" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:Hb0jPetxQ8UJ:https://www.dailymail.co.uk/sciencetech/article-8204165/New-coronavirus-test-developed-frontline-NHS-workers-diagnose-infection-FOUR-HOURS.html+&amp;cd=15&amp;hl=en&amp;ct=clnk&amp;gl=uk" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:Hb0jPetxQ8UJ:https://www.dailymail.co.uk/sciencetech/article-8204165/New-coronavirus-test-developed-frontline-NHS-workers-diagnose-infection-FOUR-HOURS.html%2B%26cd%3D15%26hl%3Den%26ct%3Dclnk%26gl%3Duk&amp;ved=2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQIDAOegQIBRAG">Cached</a></li></ol></div></span></div></div></div><div class="s"><div><span class="st"><span class="f">1 day ago - </span>The <em>test</em> involves taking a nasal swab, similar to existing <em>tests</em>, but the process of analysing the samples is much faster due to more relaxed&nbsp;...</span></div></div></div><!--n--></div>`)
	}

	static businessInsider() {
		return TestData.createElement(`<div class="g" data-hveid="CBQQAA"><h2 class="bNg8Rb">Web result with site links</h2><div><!--m--><link href="https://www.businessinsider.com/" rel="prerender"><div class="rc" data-hveid="CBQQAQ" data-ved="2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQFSgAMAB6BAgUEAE"><div class="r"><a href="https://www.businessinsider.com/" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.businessinsider.com/&amp;ved=2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQFjAAegQIFBAC"><br><h3 class="LC20lb DKV0Md">Business Insider</h3><div class="TbwUpd NJjxre"><cite class="iUh30 tjvcx">www.businessinsider.com</cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 tjvcx">www.businessinsider.com</cite></div><div class="eFM0qc"><span><div class="action-menu"><a class="GHDvEf" href="#" id="am-b0" aria-label="Result options" aria-expanded="false" aria-haspopup="true" role="button" jsaction="m.tdd;keydown:m.hbke;keypress:m.mskpe" data-ved="2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQ7B0wAHoECBQQAw"><span class="mn-dwn-arw"></span></a><ol class="action-menu-panel" role="menu" tabindex="-1" jsaction="keydown:m.hdke;mouseover:m.hdhne;mouseout:m.hdhue" data-ved="2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQqR8wAHoECBQQBA"><li class="action-menu-item" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:O3VBYDZyfnoJ:https://www.businessinsider.com/+&amp;cd=1&amp;hl=en&amp;ct=clnk&amp;gl=uk" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:O3VBYDZyfnoJ:https://www.businessinsider.com/%2B%26cd%3D1%26hl%3Den%26ct%3Dclnk%26gl%3Duk&amp;ved=2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQIDAAegQIFBAF">Cached</a></li></ol></div></span></div></div></div><div class="s"><div><span class="st"><em>Business Insider</em> is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest&nbsp;...</span></div></div></div><!--n--><table class="nrgt" cellpadding="0" cellspacing="0"><tbody><tr class="mslg r-iSSKCMGOi_uY" jsdata="mi68B;;BybcZk" jscontroller="f4MVbc" jsl="$t t-mH0ZyhDfCO0;$x 0;"><td colspan="2"><form action="/search" class="ojyYHb" id="tsuid61" style="padding-bottom:5px" jsname="I9GLp" method="GET" name="nqgs" data-ved="2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQ2wF6BAgUEAc"><script nonce="nNnris7pPyPAmfDCNLjuAw==">(function(){var id='tsuid61';document.getElementById(id).onsubmit = function(){return false;};})();</script><input class="w7Nvcd ktf std YbqTTb" placeholder="Results from businessinsider.com" title="Results from businessinsider.com" jsname="YPqjbf" autocomplete="off" maxlength="2048" size="40" type="text" jsaction="input:r.N8eazWJdA9Q" data-rtid="iSSKCMGOi_uY" jsl="$x 1;"><button class="ab_button" aria-label="Search button" name="btnGNS" type="submit" jsaction="r.KuQq-JyVflc" data-rtid="iSSKCMGOi_uY" jsl="$x 2;"><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAg0lEQVR4AWLwySwcEAxotw4wAAiBKIBeZY6wR5mbzg3XztLAZ5f4ffBjUKXXqJJhw4b1cJfsqI57YtXzGDzgTxQd7pKQYaz2gAUlG65Bt/oJ8GQUH/0xYzjwxqR0WJ+xfo/Fp5pwjxHXvFzQdsne6hdDnA9zcISpeElgwEsG+wdi2PADY3DfLvm/H5cAAAAASUVORK5CYII=" class="JOmIqc" data-atf="1"></span></button><input value="businessinsider.com" style="display:none"><div class="KwRF7d">Enter your search in the box above</div></form></td></tr><tr class="mslg dmenKe"><td><!--m--><div class="sld vsc"><span class="cNifBc"><h3 class="r"><a class="l" href="https://www.businessinsider.com/international" data-ved="2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQjBAwAXoECBQQCQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.businessinsider.com/international&amp;ved=2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQjBAwAXoECBQQCQ">International</a></h3></span><div class="s"><div class="st" style="overflow:hidden;width:220px">Business Insider Intelligence focuses on the use of AI to ...<br></div></div></div><!--n--></td><td><!--m--><div class="sld vsc"><span class="cNifBc"><h3 class="r"><a class="l" href="https://www.businessinsider.com/clusterstock" data-ved="2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQjBAwA3oECBQQCw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.businessinsider.com/clusterstock&amp;ved=2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQjBAwA3oECBQQCw">Finance</a></h3></span><div class="s"><div class="st" style="overflow:hidden;width:220px">Business Insider Intelligence examines AI solutions across ...<br></div></div></div><!--n--></td></tr><tr class="mslg"><td><!--m--><div class="sld vsc"><span class="cNifBc"><h3 class="r"><a class="l" href="https://www.businessinsider.com/sai" data-ved="2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQjBAwAnoECBQQDQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.businessinsider.com/sai&amp;ved=2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQjBAwAnoECBQQDQ">Tech</a></h3></span><div class="s"><div class="st" style="overflow:hidden;width:220px">Business Insider Intelligence focuses on the use of AI to ...<br></div></div></div><!--n--></td><td><!--m--><div class="sld vsc"><span class="cNifBc"><h3 class="r"><a class="l" href="https://www.businessinsider.com/warroom" data-ved="2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQjBAwBHoECBQQDw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.businessinsider.com/warroom&amp;ved=2ahUKEwi-vZOo79_oAhUxtHEKHQDPCIQQjBAwBHoECBQQDw">Strategy</a></h3></span><div class="s"><div class="st" style="overflow:hidden;width:220px">What You Need To Know About Business Strategy And Being ...<br></div></div></div><!--n--></td></tr></tbody></table></div></div>`)
	}

	static financeFool() {
		return TestData.createElement(`<g-inner-card class="cv2VAd"><div><div class="dbsr" data-ved="2ahUKEwjh-sSBj-DoAhW3QRUIHZHfCNQQxPQBKAEwBXoECAcQFw"><a href="https://www.fool.co.uk/investing/2020/04/10/3-bargain-ftse-100-shares-id-snap-up-for-my-stocks-shares-isa/" data-ved="2ahUKEwjh-sSBj-DoAhW3QRUIHZHfCNQQxfQBMAV6BAgHEBg" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.fool.co.uk/investing/2020/04/10/3-bargain-ftse-100-shares-id-snap-up-for-my-stocks-shares-isa/&amp;ved=2ahUKEwjh-sSBj-DoAhW3QRUIHZHfCNQQxfQBMAV6BAgHEBg&amp;sqi=2"><div class="P5BnJb"><div class="pP3ABc"><div class="hutKRb" style="width:137px"><div class="qV9w7d" style="height:77px"><div class="KNcnob" style="height:77px;width:137px"><g-img><img id="dimg_jJWRXuGEJ7eD1fAPkb-joA03" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KnQzwOj6uFygdbXD2Q2QPl78c7WKJkYmu_pkevR2ueEDYRUSWuR2MiUxx9-eAH8orQKX4lo&amp;usqp=CAI&amp;s" class="rISBZc M4dUYb" height="77" width="137" alt=""></g-img></div></div></div></div><div class="Od9uAe"><div class="y9oXvf" style="-webkit-line-clamp:2"><div aria-level="3" role="heading" class="nDgy9d" style="-webkit-line-clamp:2">3 bargain FTSE 100 shares I'd snap up for my Stocks &amp; Shares ISA</div></div><div class="tYlW7b"><span class="wqg8ad">Fool UK</span><span class="kxJ65e">·</span><span class="K4LhXb"><span class="FGlSad"><span>22 hours ago</span></span></span></div></div></div></a><div></div></div></div></g-inner-card>`)
	}
}

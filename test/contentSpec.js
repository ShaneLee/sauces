describe('Test taking a search page hiding blocked sources', () => {
	beforeEach(() => {
		spyOn(window, 'getBlockedSites').and.returnValue(['businessinsider.com', 'dailymail.co.uk', 'dailyexpress.co.uk', 'fool.co.uk'])
	})

	it('should block 1 source that contains dailymail.co.uk', () => {
		spyOn(document, 'getElementsByClassName').and.returnValue(TestData.getSearchElements(TestData.dailyMailCoUk()))
		expect(block()).toEqual(1)
	})

	it('should block 0 source when no source contains dailymail.co.uk', () => {
		spyOn(document, 'getElementsByClassName').and.returnValue(TestData.getSearchElements(TestData.dailyMailCoUk()))
		expect(block()).toEqual(1)
	})

	it('should block 0 source when search elements null', () => {
		spyOn(document, 'getElementsByClassName').and.returnValue(null)
		expect(block()).toEqual(1)
	})
})

class TestData {

	static getSearchElements(...searchElements) {
		return [...searchElements]
	}

	static createElement(element) {
		return {'innerText': element, 'setAttribute': () => { return }}
	}

	static speedTestCom() {
		return TestData.createElement(`<div class="g"><h2 class="bNg8Rb">Web results</h2><!--m--><div class="rc" data-hveid="CAEQAA" data-ved="2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQFSgAMAp6BAgBEAA"><div class="r"><a href="https://www.speedtest.net/" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQFjAKegQIARAB"><br><h3 class="LC20lb DKV0Md">Speedtest by Ookla - The Global Broadband Speed Test</h3><div class="TbwUpd NJjxre"><cite class="iUh30 tjvcx">www.speedtest.net</cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 tjvcx">www.speedtest.net</cite></div><div class="eFM0qc"><span><div class="action-menu"><a class="GHDvEf" href="#" id="am-b10" aria-label="Result options" aria-expanded="false" aria-haspopup="true" role="button" jsaction="m.tdd;keydown:m.hbke;keypress:m.mskpe" data-ved="2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ7B0wCnoECAEQAg"><span class="mn-dwn-arw"></span></a><ol class="action-menu-panel" role="menu" tabindex="-1" jsaction="keydown:m.hdke;mouseover:m.hdhne;mouseout:m.hdhue" data-ved="2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQqR8wCnoECAEQAw"><li class="action-menu-item" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:5RD1THTfC6wJ:https://www.speedtest.net/+&amp;cd=11&amp;hl=en&amp;ct=clnk&amp;gl=uk" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:5RD1THTfC6wJ:https://www.speedtest.net/%2B%26cd%3D11%26hl%3Den%26ct%3Dclnk%26gl%3Duk&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQIDAKegQIARAE">Cached</a></li></ol></div></span></div></div></div><div class="s"><div><span class="st"><em>Test</em> your Internet connection bandwidth to locations around the world with this interactive broadband speed <em>test</em> from Ookla.</span><div class="osl">‎<a class="fl" href="https://www.speedtest.net/apps/android" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/apps/android&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ0gIoADAKegQIARAG">Android</a> ·&nbsp;‎<a class="fl" href="https://www.speedtest.net/apps/windows" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/apps/windows&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ0gIoATAKegQIARAH">Windows</a> ·&nbsp;‎<a class="fl" href="https://www.speedtest.net/apps/desktop" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/apps/desktop&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ0gIoAjAKegQIARAI">Speedtest.net Desktop App</a> ·&nbsp;‎<a class="fl" href="https://www.speedtest.net/apps/chrome" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.speedtest.net/apps/chrome&amp;ved=2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ0gIoAzAKegQIARAJ">Google Chrome</a></div></div></div><div data-base-uri="/search?sxsrf=ALeKk01_wIrnMFncYAzolp7knCQPBrDK8w:1586538851050" id="ed_14" data-ved="2ahUKEwiSoY7lrd7oAhWLJcAKHfY7AjYQ2Z0BMAp6BAgBEAo"><div jsname="UTgHCf" class="AUiS2" data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQx40DegQIABAA"><div jsname="d3PE6e" style="display:none"><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAB6BAgAEAE">at&amp;t speed test</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAF6BAgAEAI">what is a good internet speed</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAJ6BAgAEAM">olca speed test</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAN6BAgAEAQ">gigabit speed test</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAR6BAgAEAU">microsoft speed test</div><div data-ved="2ahUKEwil2cLlrd7oAhWNEBQKHdOYCvkQsKwBKAV6BAgAEAY">speedtest-cli windows</div></div><span jsname="ZnuYW" class="XCKyNd" aria-label="Dismiss suggested follow ups" role="button" tabindex="0"></span><div><div jsname="l1CLDf" class="d8lLoc"><h4 jsname="IaVMje" class="eJ7tvc">People also search for</h4><div jsname="CeevUc" class="hYkSRb"></div></div></div></div></div></div><!--n--></div>`)
	}

	static dailyMailCoUk() {
		return TestData.createElement(`<div class="g"><!--m--><div class="rc" data-hveid="CAUQAA" data-ved="2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQFSgAMA56BAgFEAA"><div class="r"><a href="https://www.dailymail.co.uk/sciencetech/article-8204165/New-coronavirus-test-developed-frontline-NHS-workers-diagnose-infection-FOUR-HOURS.html" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.dailymail.co.uk/sciencetech/article-8204165/New-coronavirus-test-developed-frontline-NHS-workers-diagnose-infection-FOUR-HOURS.html&amp;ved=2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQFjAOegQIBRAB"><br><h3 class="LC20lb DKV0Md">New coronavirus test developed for frontline NHS workers can ...</h3><div class="TbwUpd NJjxre"><cite class="iUh30 bc tjvcx">www.dailymail.co.uk › sciencetech › article-8204165 › New-coronavi...</cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 bc tjvcx">www.dailymail.co.uk › sciencetech › article-8204165 › New-coronavi...</cite></div><div class="eFM0qc"><span><div class="action-menu"><a class="GHDvEf" href="#" id="am-b14" aria-label="Result options" aria-expanded="false" aria-haspopup="true" role="button" jsaction="m.tdd;keydown:m.hbke;keypress:m.mskpe" data-ved="2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQ7B0wDnoECAUQBA"><span class="mn-dwn-arw"></span></a><ol class="action-menu-panel" role="menu" tabindex="-1" jsaction="keydown:m.hdke;mouseover:m.hdhne;mouseout:m.hdhue" data-ved="2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQqR8wDnoECAUQBQ"><li class="action-menu-item" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:Hb0jPetxQ8UJ:https://www.dailymail.co.uk/sciencetech/article-8204165/New-coronavirus-test-developed-frontline-NHS-workers-diagnose-infection-FOUR-HOURS.html+&amp;cd=15&amp;hl=en&amp;ct=clnk&amp;gl=uk" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:Hb0jPetxQ8UJ:https://www.dailymail.co.uk/sciencetech/article-8204165/New-coronavirus-test-developed-frontline-NHS-workers-diagnose-infection-FOUR-HOURS.html%2B%26cd%3D15%26hl%3Den%26ct%3Dclnk%26gl%3Duk&amp;ved=2ahUKEwiOpY2Av97oAhVhqnEKHU-ZB3gQIDAOegQIBRAG">Cached</a></li></ol></div></span></div></div></div><div class="s"><div><span class="st"><span class="f">1 day ago - </span>The <em>test</em> involves taking a nasal swab, similar to existing <em>tests</em>, but the process of analysing the samples is much faster due to more relaxed&nbsp;...</span></div></div></div><!--n--></div>`)
	}
}


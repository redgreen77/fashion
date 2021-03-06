'use strict';

var meta = {
  site: "businessweek", // e.g. "businessweek"
  author: "Kurt Soller", // e.g. "Claire Suddath"
  type: "graphic", // e.g. "graphic"
  section: "Lifestyle", // e.g. "Lifestyle"
  title: "What to Wear to the Office This Fall", // e.g. "Can women ever win at work?"
  description: "Fifty style upgrades for every budget and workplace dress code",
  pubDate: "20140829", // e.g. "20140825"
  shareText: "Updating your work wardrobe? Check out @BW’s fall style guide for this season’s dos and don’ts: http://buswk.co/1lwTa3h #BWFallFashion"
};

var data = [
// {"spread":1,"id":0,"type":"intro","hed":"","dek":"It's time to start dressing up again. Over the past 10 years, workwear has gotten increasingly casual, to the point where everyone from the intern to the boss is wearing sneakers and jeans. Perhaps you haven't heard that informal office environments are linked with lower productivity. If that's not enough to get you into a suit or dress, the fantastic array of more formal clothing landing in stores this fall should be. We've compiled 50 tips and trends to help you get back to looking like you're ready to do business or, at the very least, stop treating every day like casual Friday. As some good book said: Dress for the job you wish you had.","credit":"Jenni Kayne narrow stripe pullover, $595. Frame Le Classic blouse, $188. Helmut Lang veneered angora skirt, $495. Topshop guapa suede Mary Janes, $100. Hermès watch, $8,700","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek; Hair and makeup: Kyle Malone/Exclusive Artists. Illustrations by Cari Vander Yacht","imgType":"png","imgSmall":"0_small.png","imgLarge":"0_large.png","imgWidth":null,"imgHeight":null,"notes":null},
{"spread":1,"id":1,"type":"general","hed":"Long Camel Coats","dek":"The official jacket of the Ivy League gets a much-needed makeover with a longer length and more casual fit for both men and women. The coat should fit in the shoulder and sleeves and billow out from the body a bit. Shorter women, stick with knee-length.","credit":"<strong>Him:</strong> Calvin Klein lofty cashmere overcoat, $4,995. Steven Alan Oliver suit jacket, $495, and pants, $295. Thomas Pink button-cuff shirt, $185. Saint Laurent Classic 1 sunglasses, $310. Ralph Lauren burnished-calf loafers, $475. <strong>Her:</strong> Tibi cashmere maxi coat, $845. Derek Lam bonded-crepe turtleneck, $890. Michael Kors houndstooth circle skirt, $110. Karen Walker northern lights sunglasses, $250. Chrissie Morris pointed-toe pumps, $830","photocredit":"Photograph by Geordie Wood for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"png","imgSmall":"1_small.png","imgLarge":"1_large.png","imgWidth":400,"imgHeight":649,"notes":null},
{"spread":1,"id":2,"type":"general","hed":"Leather Separates","dek":"A motorcycle jacket is a bit too rock ’n’ roll for the office, but skirts and tops are fair game. Wear with other dark pieces to add texture—and prove to colleagues you've still got a little edge.","credit":"Alexander Wang sleeveless shirt, price upon request. Cushnie et Ochs leather mini trumpet skirt, $1,495","photocredit":"Photograph by Jody Rogac for Bloomberg Businessweek; soft-goods stylist: Elizabeth Osborn","imgType":"png","imgSmall":"2_small.png","imgLarge":"2_large.png","imgWidth":213,"imgHeight":397,"notes":null},
{"spread":1,"id":3,"type":"experiment","hed":"A Non-Nerdy Sweater Vest","dek":"They're practical and preppy and seem like the perfect thing to wear in early fall's in-between weather. This comfy mohair Saint Laurent vest ($725 at mrporter.com), with its argyle pattern and slimmer silhouette, looked great on the rack. I imagined it would become my new go-to garment—a contemporary version of an old-school item that looks just as cool now as it did in the Fifties. But, actually, I looked sort of lame. When I put the V-neck on over a dress shirt, the V was a little too low, and the whole thing read too math-teachery. I'm not giving up just yet: Next week, I'm trying it with a navy blazer. Maybe then. <em>—Kurt Soller</em>","credit":"","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"png","imgSmall":"3_small.png","imgLarge":"3_large.png","imgWidth":219,"imgHeight":306,"notes":null},
{"spread":1,"id":4,"type":"quote","hed":"<strong>Jeremy Langmead</strong>","dek":"I’m pleased to see looser pants come back. They enable you to carry things in your pocket once more.","credit":"<em>Chief content officer, Christie’s</em>","photocredit":"","imgType":"png","imgSmall":"4_small.png","imgLarge":"4_large.png","imgWidth":null,"imgHeight":null,"notes":null},
{"spread":1,"id":5,"type":"rant","hed":"Put Down the Beanie","dek":"The hipster's favorite winter accessory may have gone mainstream, but that doesn't mean these dumb little hats are a good idea. They're not particularly warm and always leave you with hat hair. On truly cold days, stick with a coat that has a hood.","credit":"","photocredit":"Photograph by Eva O’Leary for Bloomberg Businessweek; soft-goods stylist: John Olsen","imgType":"png","imgSmall":"5_small.png","imgLarge":"5_large.png","imgWidth":150,"imgHeight":154,"notes":null},
{"spread":1,"id":6,"type":"general","hed":"Vermilion: The Color of the Season","dek":"Red gets a bad rap, even though it's surprisingly flattering for most people—sorry, redheads—and pops nicely against neutrals. On the runways, almost every major designer showed head-to-toe vermilion looks, often created from many separates in the same fabric. That's far too intense for most workplaces (and most humans). Instead, buy one piece you love and wear it alone or with other basics. It will be great for when you've got an after-work dinner and don't want to look like an office drone.","credit":"<strong>Left:</strong> Prada silk dress, $3,040. Hermès yellow-gold bracelet, $15,200. Topshop guapa suede Mary Janes (also at right), $100. <strong>Center:</strong> Ami unlined hooded wool coat, $900. Michael Michael Kors glacier check shirt, $125. Polo Ralph Lauren classic-fit chinos, $85. Cole Haan for Todd Snyder boots, price upon request. <strong>Right:</strong> Tory Burch Kendra dress, $425. Hue opaque tights, $13.50","photocredit":"Photographs by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"gif","imgSmall":"6_small.gif","imgLarge":"6_large.gif","imgWidth":666,"imgHeight":491,"notes":null},
{"spread":1,"id":7,"type":"general","hed":"Mixed-Material Accessories","dek":"Stuart Weitzman's shearling and leather handbag ($900) represents the next iteration of the color-blocking trend. If this fuzzy texture isn't for you, seek out similar bags and shoes that incorporate different types of leather, snakeskin, and synthetics such as neoprene. Or try on Weitzman's women's brogues ($395), featuring a sleek combination of matte and “goosebump” leather, which looks a lot more chic than it sounds.","credit":"","photocredit":"Photograph by Jody Rogac for Bloomberg Businessweek; soft-goods stylist: Elizabeth Osborn","imgType":"png","imgSmall":"7_small.png","imgLarge":"7_large.png","imgWidth":425,"imgHeight":330,"notes":null},
{"spread":2,"id":9,"type":"makeover","hed":"<strong>Kate Pratt, 26</strong> <br /><em>Director of team partnership sales, Madison Square Garden</em>","dek":"“I find sponsorship partners, and I'm in meetings with clients in my usual classic style from breakfast until 10 p.m. I also wear the same pumps and jewelry every day, so I'd love to expand my options. This outfit is very sophisticated. I like it!”","credit":"Cos white button-up, $89. Salvatore Ferragamo pleated leather skirt, $4,330. Rebecca Minkoff jewel-box-clip-clasp bangle, $58. Jennifer Meyer pyramid cuff, $6,800. Paul Andrew Lennox sandals, $895","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists; Illustrations by Cari Vander Yacht","imgType":"png","imgSmall":"9_small.png","imgLarge":"9_large.png","imgWidth":356,"imgHeight":875,"notes":null},
{"spread":2,"id":10,"type":"general","hed":"Tailored Flannel","dek":"With slightly relaxed jackets and slim-but-not-skinny pants, brushed-wool suits aren't just for Mad Men anymore.","credit":"<strong>Left:</strong> Brooklyn Tailors unstructured blazer, $595, and tailored trouser, $305. Gitman Bros. English spread shirt, $145. Tie Bar wool tie, $15. Jack Erwin bluchers, $195. <strong>Right:</strong> Gant by Michael Bastian MB pinstripe blazer, $795, and pants, $325. Todd Snyder dress shirt, $225. Tie Bar wool tie, $13.50. J.Crew Ludlow wingtips, $318","photocredit":"Photograph by Jody Rogac for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"png","imgSmall":"10_small.png","imgLarge":"10_large.png","imgWidth":475,"imgHeight":671,"notes":null},
{"spread":2,"id":11,"type":"general","hed":"A Dandy-ish Scarf","dek":"Use one in place of a tie to lighten up a dark topcoat. Burberry's bottle-green cashmere version ($1,250) is on the ultrahigh end, but maybe that means you won't lose it in a cab.","credit":"","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek","imgType":"png","imgSmall":"11_small.png","imgLarge":"11_large.png","imgWidth":286,"imgHeight":181,"notes":null},
{"spread":2,"id":12,"type":"guide","hed":"Printed Pants","dek":"Drapey, colorful trousers, stocked in women's stores since last spring, are sticking around for fall. In expensive silks and more affordable poly-blend fabrics, they are an unexpected match with fall's crew neck sweaters and suede boots. Opt for subtle prints at the office.","credit":"","photocredit":"Illustrations by Cari Vander Yacht","imgType":"png","imgSmall":"12_small.png","imgLarge":"12_large.png","imgWidth":399,"imgHeight":360,"notes":null},
{"spread":2,"id":13,"type":"general","hed":"Less Formal Fur Coats","dek":"New versions aren't like the ones your mom wore: They're short and sleek, with clean lines that elevate skinny jeans and pencil skirts. Try one in a light color, like this Yves Salomon stunner. <br /><br /><strong> … On Second Thought, Go With Faux <small>(inset)</small></strong><br />Fake fur is best for those with ethical concerns or tighter budgets: The real one costs 43(!) times more than this Zara knockoff.","credit":"Yves Salomon pink beaver coat, $7,273. Calvin Klein windowpane blouse, $70. Frame Le Skinny denim jeans, $200. Jimmy Choo Mimi pumps, $595. Inset: Zara faux fur coat, $169","photocredit":"Photograph by Geordie Wood for Bloomberg Businessweek; hair and makeup: Jessi Butterfield","imgType":"png","imgSmall":"13_small.png","imgLarge":"13_large.png","imgWidth":600,"imgHeight":798,"notes":null},
{"spread":3,"id":15,"type":"general","hed":"Colorful Knee-High Boots","dek":"Rounded toes, chunky heels, and jewel-toned leather make these standouts. Have a third-party cobbler (not the store) waterproof them to protect from damaging snow.","credit":"<strong>Burgundy:</strong> Gianvito Rossi Mattie leather boots, $1,785. <strong>Olive:</strong> Bally knee-high boots, $1,795. <strong>Tan:</strong> Pedro García Beryl suede boots, $775","photocredit":"Photograph by Jody Rogac for Bloomberg Businessweek; soft-goods stylist: Elizabeth Osborn","imgType":"png","imgSmall":"15_small.png","imgLarge":"15_large.png","imgWidth":300,"imgHeight":497,"notes":null},
{"spread":3,"id":16,"type":"brand","hed":"J.Hilburn","dek":"<strong>Year established:</strong> 2007 <br /><strong>Known for:</strong> Custom suits, shirts, and other preppy guy essentials, tailored in person and sold online <br /><strong>Buy:</strong> Classic made-to-fit blazers like this unlined navy staple ($600)","credit":"","photocredit":"Photograph by Eva O'Leary for Bloomberg Businessweek; soft-goods stylist: John Olsen","imgType":"png","imgSmall":"16_small.png","imgLarge":"16_large.png","imgWidth":200,"imgHeight":215,"notes":null},
{"spread":3,"id":17,"type":"rant","hed":"The End of Crazy Socks","dek":"Bright pairs emerged over the past decade as a sign that men care about style. That's now well established, so go back to basics: Socks should be just lighter or darker than your pants, preferably plain, and hopefully inconspicuous.","credit":"","photocredit":"Photograph by Eva O'Leary for Bloomberg Businessweek; soft-goods stylist: John Olsen","imgType":"png","imgSmall":"17_small.png","imgLarge":"17_large.png","imgWidth":150,"imgHeight":169,"notes":null},
{"spread":3,"id":18,"type":"general","hed":"Superior Overcoats","dek":"Those gigantic Canadian puffers are ugly, and black's too depressing. Invest in a wool topper that's cut longer, with an interesting collar or lapels that help dress up clothes underneath. It's the one thing you'll wear almost every day this winter, so don't feel bad about spending a bit more than you might like—though affordable options, such as the Cos one below, do exist.","credit":"<strong>Green:</strong> Cos oversize coat, $290. Bottega Veneta technical crepe dress, $4,100. Gianvito Rossi suede pumps, $250. <strong>Gray:</strong> Brioni single-breasted overcoat, $8,250. Hardy Amies gray plaid suit, $1,595. Emporio Armani wool tie, $145. Tod’s derbys, $645. <strong>Navy:</strong> Michael Kors Melton officer’s coat, $695. Rag & Bone Trevor crew, $350. DKNY white cotton button-down, $65. A.P.C. petit standard jeans, $185. H.E. by Mango bluchers, $129.99. <strong>Aqua:</strong> Apiece Apart Esta coat, $595. Jenni Kayne overlap top, $325. Zero + Maria Cornejo Madi skirt, $695. Manolo Blahnik Marcafac, $695. Eddie Borgo bell drop earrings, $100","photocredit":"Photographs by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"gif","imgSmall":"18_small.gif","imgLarge":"18_large.gif","imgWidth":800,"imgHeight":500,"notes":null},
{"spread":3,"id":19,"type":"guide","hed":"Allover Patterned Dresses","dek":"Different from other printed frocks, these have a single motif spanning the entire garment rather than a small, repeating design. Wear one to exude confidence during a big presentation, or pair it with a cardigan to brighten up your Monday morning.","credit":"","photocredit":"Illustration by Cari Vander Yacht","imgType":"png","imgSmall":"19_small.png","imgLarge":"19_large.png","imgWidth":340,"imgHeight":396,"notes":null},
{"spread":3,"id":20,"type":"experiment","hed":"A Long Blazer","dek":"Oversize blazers, done right, look impossibly chic. And impossible to pull off yourself. Can someone who's not 5 foot 10 wear one without resembling a kid in Mom's clothes? I paired mine, an AllSaints Calia blazer ($415), which hits at the lower hip, with a cream and black polka dot miniskirt from J.Crew and a long-sleeve gray T-shirt from Cos. Even though I'm short, the blazer looked great—sophisticated and not too slouchy. The trick is to get one that's fitted in the shoulders and wear it with a sleeker silhouette underneath. If you roll up the sleeves—or buy them prerolled, like this one—the jacket's also less likely to overwhelm your frame. <em>—Emma Rosenblum</em>","credit":"","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"png","imgSmall":"20_small.png","imgLarge":"20_large.png","imgWidth":262,"imgHeight":346,"notes":null},
{"spread":3,"id":21,"type":"general","hed":"New Hair!","dek":"<strong>Women: A Bob With Bounce</strong><br /> Get your hair cut above the shoulders, and “wrap 2-inch sections around a medium curling iron,” says hairstylist Kyle Malone. Run fingers through, then set with Oribe's Après Beach Wave and Shine Spray ($21.50). If you have longer hair, tuck it behind your collar to fake the length. <br /><br /><strong>Men: A Small Swoop</strong><br /> Let your hair grow out an inch or two, then push it slightly forward and to the opposite side of your part. Next, apply a dime-size amount of Baxter of California clay pomade ($20) for what Malone calls “a rugged-yet-polished effect.”","credit":"","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"png","imgSmall":"21_small.png","imgLarge":"21_small.png","imgWidth":249,"imgHeight":199,"notes":"no large image"},
{"spread":3,"id":23,"type":"general","hed":"Almost Invisible Nail Polish","dek":"After seasons of neon and nail art, nude varnish looks elegant. Find one that's a shade lighter or darker than your skin tone. It shouldn't match exactly.","credit":"","photocredit":"Photograph by Eva O'Leary for Bloomberg Businessweek; soft-goods stylist: John Olsen","imgType":"png","imgSmall":"23_small.png","imgLarge":"23_small.png","imgWidth":164,"imgHeight":173,"notes":"no large image"},
{"spread":3,"id":24,"type":"quote","hed":"<strong>Katia Beauchamp</strong>","dek":"Try a face mist. It tightens features and makes you look more awake.","credit":"<em>Co-founder, Birchbox</em>","photocredit":"","imgType":"png","imgSmall":"24_small.png","imgLarge":"24_large.png","imgWidth":null,"imgHeight":null,"notes":null},
{"spread":3,"id":25,"type":"general","hed":"Not Jeans. Not Chinos. <em>Trousers.</em>","dek":"Up your game with well-cut dress pants. A glen plaid or subtle check looks great with a plain shirt or polo. Finish it all with heavy-soled brogues.","credit":"<strong>Left:</strong> Joseph dash trousers, $374. Hardy Amies gray peacoat, $1,295. Hugo Boss grid shirt, $155. Giorgio Armani belt, $375. Christian Louboutin brogues, $1,275. <strong>Right:</strong> Hardy Amies grid trousers, $1,595 (entire suit). Joseph chunky stitch polo, $540. Burberry polished brogues, $695. Uniform Wares watch, $375. Brooks Brothers ribbed crew socks, $19.50","photocredit":"Photograph by Geordie Wood for Bloomberg Businessweek","imgType":"png","imgSmall":"25_small.png","imgLarge":"25_large.png","imgWidth":500,"imgHeight":641,"notes":null},
{"spread":4,"id":26,"type":"general","hed":"The New Briefcase: 16 Structured Satchels for Men and Women ","dek":"This season's best bags are big enough to hold more than “just the essentials.” They'll withstand any commute's abuse, thanks to thick leather, locking metal clasps, and reinforced top handles that lend some retro charm. <br /><br /><strong>… And Very Little Ladies' Gloves</strong> <br />A style that hits below the wrist, as in this pair from Carolina Amato ($45), is easy to take off when texting your colleagues. They look pretty with bangles, too.","credit":"1. Lotuff zip-top briefcase, $680. 2. Sophie Hulme tote bag, $975. 3. Filson leather brief, $785. 4. Marni metal and calf-leather bag, $2,140. 5. Ralph Lauren Cooper black briefcase, $2,500. 6. Billykirk schoolboy satchel, $365. 7. Prada leather bag, $2,600. 8. Mulberry Somerton briefcase, $2,500. 9. Zara tricolor bowling bag, $99.90. 10. Claire Vivier suede Sandrine bag, $483. 11. Proenza Schouler Elliot shoulder bag, $6,975. 12. Bally corner MD handbag, $1,695. 13. Ann Taylor mini satchel, $158. 14. Valextra portfolio briefcase, $2,230. 15. Paul Smith leather shoulder bag, $1,230. 16. Time's Arrow Helene bag, $795","photocredit":"Photograph by Geordie Wood for Bloomberg Businessweek; soft-goods stylist: Elizabeth Osborn","imgType":"png","imgSmall":"26_small.png","imgLarge":"26_large.png","imgWidth":846,"imgHeight":791,"notes":null},
{"spread":4,"id":28,"type":"experiment","hed":"A Hefty Turtleneck","dek":"Too lightweight, and you look like a mime. Too heavy, and you're auditioning for the L.L. Bean catalog. Still, there's something classy and European about a turtleneck, and this Bally one ($850) is great. The cashmere feels like a soft animal hugging your neck. The lines at the shoulder provide a flattering fit. Despite that, it isn't something I can recommend for any but the most self-assured of gentlemen. Yes, I was teased. And the bigger problem is that nothing looks good over the sweater or, of course, under it. It's just you. And your precious turtleneck. <em>—K.S.</em>","credit":"","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"png","imgSmall":"28_small.png","imgLarge":"28_large.png","imgWidth":227,"imgHeight":282,"notes":null},
{"spread":4,"id":29,"type":"brand","hed":"<strong>Byredo</strong>","dek":"<strong>Year established:</strong> 2006<br /><strong>Known for:</strong> Slightly off-kilter fragrances for men and women that won't offend co-workers but will improve your day<br /> <strong>Buy:</strong> Musky, floral Mojave Ghost ($145)","credit":"","photocredit":"Photograph by Eva O'Leary for Bloomberg Businessweek","imgType":"png","imgSmall":"29_small.png","imgLarge":"29_large.png","imgWidth":230,"imgHeight":206,"notes":null},
{"spread":4,"id":30,"type":"general","hed":"Simpler Sneakers","dek":"New Balance has become status quo among tech dudes, so put yours on ice. Instead, go for a luxe riff on Adidas's classic Stan Smith. This one, the Royale in stark white ($159), is from Greats, an Internet startup that makes its pliable leather kicks in Italy.","credit":"","photocredit":"","imgType":"png","imgSmall":"30_small.png","imgLarge":"30_large.png","imgWidth":278,"imgHeight":214,"notes":null},
{"spread":4,"id":31,"type":"general","hed":"Monochrome for Men","dek":"Wearing one neutral from head to toe is a surprisingly versatile strategy, especially if you've got a complicated schedule. Stick to navy, charcoal, or black, then mix up the textures to keep from looking like a human paint swatch. Wake up, choose your color, and go.","credit":"<strong>Navy:</strong> Ovadia & Sons houndstooth flannel jacket, $1,495. Club Monaco classic fit shirt, $59. Nudie Alf straight-leg jeans, $199. Florsheim oxford shoes, $175. <strong>Black:</strong> Marni overcoat, $1,810. Todd Snyder cable crew sweater, $395. Salvatore Ferragamo wool trousers, $900. Robert Clergerie oxford shoes, $595","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"gif","imgSmall":"31_small.gif","imgLarge":"31_large.gif","imgWidth":607,"imgHeight":500,"notes":null},
{"spread":5,"id":32,"type":"general","hed":"Autumnal Colors","dek":"Foliage-inspired clothing always looks good when the leaves are falling. This season in particular, designers and fast-fashion labels have churned out a range of saffrons, burnt oranges, burgundies, and muddy greens. Mix and match with neutrals to create a wardrobe that fights the gray, dreary weather.","credit":"","photocredit":"Photographs by Eva O'Leary for Bloomberg Businessweek; soft-goods stylist: John Olsen","imgType":"png","imgSmall":"32_small.png","imgLarge":"32_large.png","imgWidth":706,"imgHeight":291,"notes":null},
{"spread":5,"id":33,"type":"brand","hed":"<strong>Simon Miller</strong>","dek":"<strong>Year established:</strong> 2009 <br /><strong>Known for:</strong> High-quality Japanese denim, made in L.A. <br /><strong>Buy:</strong> The men's M002 in selvedge ($245); you have to break them in yourself","credit":"","photocredit":"Photograph by Eva O'Leary for Bloomberg Businessweek; soft-goods stylist: John Olsen","imgType":"gif","imgSmall":"33_small.gif","imgLarge":"33_large.gif","imgWidth":215,"imgHeight":267,"notes":null},
{"spread":5,"id":34,"type":"general","hed":"Heavy Knits","dek":"Ditch that sad sweater hanging off your desk chair and buy a cozier version, such as Karen Walker's blue-and-cream turtleneck ($290). Choose a subtle texture, and go a size up if you plan to wear it with skinny jeans, pencil skirts, or other fitted garments.","credit":"","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"gif","imgSmall":"34_small.gif","imgLarge":"34_large.gif","imgWidth":200,"imgHeight":239,"notes":null},
{"spread":5,"id":35,"type":"general","hed":"Power Dressing (Without the Shoulder Pads)","dek":"Skirt suits are back, but updated versions of the Melanie Griffith classic forgo the boxy cut, cheap polyester, and flimsy buttons that defined their Eighties forebears. Look for ones in traditional tailoring fabrics, as shown above, so the figure-flattering separates also work well on their own.","credit":"<strong>Solid:</strong> Elizabeth and James Madison jacket, $465, and Salem skirt, $295. Ports 1961 metal-sculpted heels, $750. <strong>Bouclé:</strong> Ann Taylor bouclé jacket, $169, and skirt, $98. Tsovet watch, $200. Jimmy Choo Mimi pumps, $595. Wolford opaque tights, $55. <strong>Pinstripe:</strong> Bally wool pinstripe blazer, $1,995, and skirt, $650. Frame Le Classic blouse, $188. Manolo Blahnik Durut in navy suede, $825","photocredit":"Photographs by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"gif","imgSmall":"35_small.gif","imgLarge":"35_large.gif","imgWidth":608,"imgHeight":483,"notes":null},
{"spread":5,"id":36,"type":"general","hed":"Mod Shifts and Textured Tights","dek":"Sixties-inspired short dresses are everywhere this fall. The flower-child style can be professional so long as the fabric is in a darker shade and has a nonpsychedelic print.<br /><br />Falke's merino wool stockings ($74) bring the dress into the modern era. Plus, they're super warm.","credit":"Orla Kiely snowdrop tunic dress, $448. Loeffler Randall Remy pump, $325. Daniel Wellington Sheffield watch, $199","photocredit":"Photograph by Jody Rogac for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"gif","imgSmall":"36_small.gif","imgLarge":"36_large.gif","imgWidth":371,"imgHeight":713,"notes":null},
{"spread":5,"id":38,"type":"general","hed":"Dangly, Delicate Necklaces","dek":"Drape them over dress shirts and knits to add polish to basic work clothes. Come holiday party time, loop the pearls or precious metals twice around your neck for an elegant look.","credit":"Gillian Steinhardt hand-and-pearl opera necklace, $525. Jennifer Fisher 18k-gold long-link chain, $4,600","photocredit":"Photograph by Eva O'Leary for Bloomberg Businessweek; soft-goods stylist: John Olsen. 34","imgType":"png","imgSmall":"38_small.png","imgLarge":"38_large.png","imgWidth":378,"imgHeight":274,"notes":null},
{"spread":5,"id":39,"type":"quote","hed":"<strong>Roopal Patel</strong>","dek":"Play with proportion this fall. Pair big oversize knits with wide-leg pants or long skirts.","credit":"<em>Fashion consultant</em>","photocredit":"","imgType":"png","imgSmall":"39_small.png","imgLarge":"39_large.png","imgWidth":null,"imgHeight":null,"notes":null},
{"spread":5,"id":40,"type":"guide","hed":"Double-Breasted Blazers","dek":"They're in style again, but they're still tough to wear. To ease your way in, try one in place of your standard navy blazer, rather than as part of a suit, and pair it with your regular pants, shirts, and ties.","credit":"","photocredit":"Illustration by Cari Vander Yacht","imgType":"png","imgSmall":"40_small.png","imgLarge":"40_large.png","imgWidth":330,"imgHeight":407,"notes":null},
{"spread":6,"id":41,"type":"general","hed":"Hued Suits","dek":"All your suits are boring and gray. The solution: Invest in one that’s colorful—red, purple, blue, green, whatever—but barely. Opt for a classic cut in a fabric with texture and depth, so it doesn’t look like it came from a costume shop.","credit":"<strong>Red:</strong> Brioni cherry-brandy silk-and-wool suit, $5,600. Gitman Bros. point collar shirt (throughout), $145. Bally Rendy oxfords (throughout), $1,025. <strong>Purple:</strong> Todd Snyder plum glen plaid suit, price upon request. <strong>Blue:</strong> Canali bird's-eye wool two-button suit, $1,610. <strong>Green:</strong> Ralph Lauren Purple Label olive houndstooth suit, $4,995","photocredit":"Photographs by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"gif","imgSmall":"41_small.gif","imgLarge":"41_large.gif","imgWidth":805,"imgHeight":502,"notes":null},
{"spread":6,"id":42,"type":"general","hed":"Sweater Dresses","dek":"This season's comfortable crew neck dresses are the easiest way to get out the door in a hurry. Add dark tights and ankle boots, and for once be on time.","credit":"Zara ecru sweater dress, $79.90. Hue tights, $13.50. Donna Karan leather crocodile-printed satchel, $1,695","photocredit":"Photograph by Geordie Wood for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"png","imgSmall":"42_small.png","imgLarge":"42_large.png","imgWidth":450,"imgHeight":677,"notes":null},
{"spread":6,"id":43,"type":"guide","hed":"Men's Cardigans","dek":"Part sweater, part blazer, part jacket, a cardigan is the one garment in a guy's wardrobe that can look casual and dressy. Avoid the Mr. Rogers look by choosing one that's lightweight (say, a fine-gauge merino wool) and not too tight. Otherwise, it will inevitably gape at the buttons and pull at the shoulders. Pair with a sharp oxford button-down and a tie, then rise above the grandpa jokes.","credit":"","photocredit":"Illustration by Cari Vander Yact","imgType":"png","imgSmall":"43_small.png","imgLarge":"43_large.png","imgWidth":330,"imgHeight":407,"notes":null},
{"spread":6,"id":44,"type":"brand","hed":"Trademark","dek":"<strong>Year established:</strong> 2013 <br /><strong>Known for:</strong> Colorful takes on vintagey sportswear for men and women, designed by Chris Burch's daughters, Pookie and Louisa <br /><strong>Buy:</strong> Simpler work basics like this pleated wool skirt ($398)","credit":"","photocredit":"Photograph by Eva O’Leary for Bloomberg Businessweek; soft-goods stylist: John Olsen","imgType":"png","imgSmall":"44_small.png","imgLarge":"44_large.png","imgWidth":230,"imgHeight":227,"notes":null},
{"spread":6,"id":45,"type":"quote","hed":"<strong>Alexander Olch</strong>","dek":"This fall, I'm into buttoning up and dressing up more. It's time to outdress your boss.","credit":"<em>Menswear designer</em>","photocredit":"","imgType":"png","imgSmall":"45_small.png","imgLarge":"45_large.png","imgWidth":null,"imgHeight":null,"notes":null},
{"spread":6,"id":46,"type":"experiment","hed":"Oversize Culottes","dek":"I bought a pair of G.V.G.V. culottes for $270 from the New York store Opening Ceremony. Culottes, for those who didn't live through the Eighties, are hybrid shorts-skirts wide enough that they sometimes look like cutoff M.C. Hammer pants. These don't—they're navy, well made, and have an awesome fit: loose but not baggy, offering mobility and femininity. I wore them to a meeting at a new client's office and was complimented almost immediately. Several strangers stopped me during my subway commute home. One woman said I looked “amazing,” while another called me “so chic.” Near the end of the trip, a third lady simply pointed at my shorts-pants. “Those are so great,” she enthused. Get a pair and wear them with heels and a fitted top. I swear, they're not too weird. Really. <em>—Shibon Kennedy</em>","credit":"With culottes: Tibi bee mules, $262","photocredit":"Photograph by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"png","imgSmall":"46_small.png","imgLarge":"46_large.png","imgWidth":232,"imgHeight":313,"notes":null},
{"spread":6,"id":47,"type":"makeover","hed":"<strong>Mark Cooper, 45</strong><br /><em>Co-founder and vice president for customer success, Offerpop</em>","dek":"“Our office is laid-back, but I need a wardrobe that works at other companies, since I never know what environment I'm walking into. I spend my time in customer meetings and hiring interviews. This look has a conservative silhouette, but it's riskier with colors and patterns.”","credit":"Ted Baker blue-check blazer, $525. Ralph Lauren Black Label Sloan shirt, $325. Theory Haydin five-pocket pants, $195. Shoes, Cooper's own","photocredit":"Photographs by B. Blanchet for Bloomberg Businessweek; hair and makeup: Kyle Malone/Exclusive Artists","imgType":"png","imgSmall":"47_small.png","imgLarge":"47_large.png","imgWidth":356,"imgHeight":875,"notes":null},
{"spread":6,"id":48,"type":"general","hed":"Military Details","dek":"Army green, shoulder epaulets, cargo pockets on a slim pair of men's khakis, the belt on this Salvatore Ferragamo coat ($4,230)—nods to officers' uniforms are all over fashion this fall.","credit":"With military jacket: J.Crew plaid sweater, $128; Club Monaco classic shirt, $59","photocredit":"","imgType":"png","imgSmall":"48_small.png","imgLarge":"48_large.png","imgWidth":350,"imgHeight":536,"notes":null},
{"spread":6,"id":49,"type":"general","hed":"Statement Belts","dek":"Clasp this Marni beauty ($300)—or one of the more affordable options in stores—around your waist to give new life to a work dress you've been wearing forever.","credit":"","photocredit":"Photograph by Eva O’Leary for Bloomberg Businessweek; soft-goods stylist: John Olsen","imgType":"png","imgSmall":"49_small.png","imgLarge":"49_large.png","imgWidth":216,"imgHeight":195,"notes":null},
{"spread":6,"id":50,"type":"general","hed":"The Way We Shop Next","dek":"Retail companies are obsessed with getting mobile commerce right. No one's nailed it. Spring, an app released in August, may get closer to persuading customers to buy designer items on their phones. Its clean, easy-to-navigate interface resembles Instagram, and any fashion brand can sign up for an account. Goods are displayed one by one in pictures that are more aspirationally pretty than those on traditional e-commerce sites. Shoppers can follow their favorite labels—Michael Kors, Derek Lam, and almost 500 others have joined up—and, when they see something they like, snag it with the swipe of a finger. (Goodbye, digital shopping cart.) The app takes a cut, but it's a smaller percentage for companies that offer free shipping and easy returns. Suddenly, spending real money feels like a game. Download at your own risk—it's really fun.","credit":"","photocredit":"Photograph by Jody Rogac for Bloomberg Businessweek","imgType":"png","imgSmall":"50_small.png","imgLarge":"50_large.png","imgWidth":266,"imgHeight":295,"notes":null}
];

// shuffle all but first and last element
data = data.slice(0,1).concat(
       _.shuffle(data.slice(1,data.length-1)),
       data.slice(data.length-1,data.length));

// permalink: show linked item first
if(location.hash) {
  data.forEach(function(value, index) {
    if(value.id == location.hash.split("#")[1]) {
      data.unshift(data.splice(index, 1)[0]);
    }
  });
}

var $container,
    templateItem,
    templateQuote;

// misc. parameters
var progLoadBuffer = 200,
    progLoadLimit = 10,
    parallaxRate = 100,
    masonryMinWidth = 401;

///////////////////////////////////////////////////

$( document ).ready(function() {
  if(inIframe()) $("body").addClass("iframed");

  sizeHeader();
  $container = $('#container');
  templateItem = $("#template-item").html();
  templateQuote = $("#template-quote").html();

  // MASONRY (once images load)
  if($(window).width() >= masonryMinWidth) { initializeMasonry(); }

  // Load the initial 10 (kinda duplicate code...)
  var $items = getItems($("#container").children().length-1, progLoadLimit);
  $container.masonryImagesReveal($items);

  // SOCIAL RULES EVERYTHING AROUND ME, SCREAM
  $('.popup-twitter').click(function() {shareTwitter(meta.shareText) } );
  $('.popup-linkedin').click(function() { shareLinkedIn(meta.shareText) } );
  $('.popup-facebook').click(function() { shareFacebook(meta.shareText) } );
  $('.popup-pinterest').click(function() {sharePinterest(meta.shareText, document.URL, 'https://s3-us-west-2.amazonaws.com/graphics-images/og-img.png') } );

  // Post-poll tweet (delegated event)
  $(document).on("click", ".poll .answer .tweet", function(event) {
    shareTwitter($(event.currentTarget).data("shareText"), document.URL.split("#")[0] + "#" + $(event.currentTarget).closest('.item').attr("id"));
  });

  // the unbearable weight of ANALYTICS OR IT DIDN'T HAPPEN!!!
  analytics(meta);


});

// delegated event, so it stays "live" (won't fire after poll is resolved)
$(document).on("click", ".poll.unresolved .answer", function(event) {

  var pollCookieId = $(event.target).parents('.item').attr('id');

  ga('send', 'event', 'poll', 'click', 'poll-click-' + pollCookieId);
  ga('fashion.send', 'event', 'poll', 'click', 'poll-click-' + pollCookieId);


  var poll = $(event.target).closest('.poll');
  var answer = $(event.target).closest('.answer');
  var answerValue = answer.hasClass('yes');

  poll.removeClass("unresolved");
  poll.addClass("resolved");

  poll.find(".answer").addClass("final");
  answer.addClass("selected");
  answer.find('.progress').show();

  // send request to poll server
  var postData = {
    app: 'fashion2014',
    questionId: poll.data('poll-id'),
    text: 'Could you wear this?',
    answers: [
      {id: 0, text: "Yes", vote: answerValue.toString()},
      {id: 1, text: "No", vote: (!answerValue).toString()}
    ]
  }

  if(docCookies.getItem("fashion-poll-" + pollCookieId)) {
    $.get("http://bw-poll-server.herokuapp.com/api/" + postData.app + "/" + postData.questionId, function(returnData) {
      processPollResponse(returnData)
    }, 'json');
  } else {
    $.post("http://bw-poll-server.herokuapp.com/api/vote", postData, function(returnData) {
      docCookies.setItem("fashion-poll-" + pollCookieId, "voted");
      processPollResponse(returnData);
    }, 'json');
  }


  function processPollResponse(returnData) {
    answer.find('.progress').hide();

    var voteSum = returnData.question.answers.reduce(function(prev, value) { return prev + value.votes; }, 0);
    var tally = [];
    returnData.question.answers.forEach(function(answer) {
      var percentage = Math.round((answer.votes/voteSum)*100);
      var answerEl = poll.find('[data-answer-id="'+answer.id+'"]');
      answerEl.css("width", percentage+"%");
      if(percentage==0) { answerEl.hide(); }
      answerEl.find(".percentage").text(percentage+"%");
      tally[answer.text] = percentage;
    })

    if(tally['Yes'] > 50) {
      if(answerValue) {
        // majority would wear, including user
        var shareText = "I would wear this to work. Would you?";
      } else {
        // majority would wear, but user wouldn't
        var shareText = "I can't believe people would go to work like this. I would never!";
      }
    } else {
      if(answerValue) {
        // majority wouldn't wear, but user would
        var shareText = "I can't believe people wouldn't wear this. I would!";
      } else {
        // majority wouldn't wear, including user
        var shareText = "Yeah, no one should wear this to work.";
      }
    }

    answer.find(".tweet").show().data("shareText", shareText);
  }

})

function updateParallax() {
  var y = $(window).scrollTop();
  $("body").css("background-position", "0% " + (y/parallaxRate)+"%");
}

function masonryReveal() {
  console.log('scroll test')
  if($(window).scrollTop() + $(window).height() > $(document).height() - progLoadBuffer) {
    var $items = getItems($("#container").children().length-1, progLoadLimit);
    if($items.length != 0) {
      // progressively reveal next items
      $container.masonryImagesReveal($items);
    } else {
      // nothing more to load, hide spinner
      allItemsRevealed = true
      $(".progressive-loading-indicator").hide();
      ga('send', 'event', 'item-reveal', 'scroll', 'fashion-finish');
      ga('fashion.send', 'event', 'item-reveal', 'scroll', 'fashion-finish');

    }
  }
}

var throttleMasonry = _.throttle(masonryReveal, 500)
var throttleParallax = _.throttle(updateParallax, 0)
var allItemsRevealed = false

$(window).scroll(function(event) {
  window.requestAnimationFrame(updateParallax)

  if(allItemsRevealed === false) {
    window.requestAnimationFrame(throttleMasonry)  
  }


  // terrible janky width-dependent (?!) parallax background scroll
  // updateParallax()
  // when you hit the bottom, load more
})

$(window).resize(sizeHeader);

function sizeHeader() {
  console.log('sizeheader')
  var hed = $(".headline");
  hed.css("height", hed.css("width"));
}

// fetch slices of items and return as jquery object
// from http://codepen.io/desandro/pen/kwsJb
function getItems(offset, limit) {
  var itemsHTML = '';
  var items = data.slice(offset, offset+limit);
  items.forEach(function(item) {
    if(item.type == "quote") {
      itemsHTML += _.template(templateQuote, {"item": item});
    } else {
      itemsHTML += _.template(templateItem, {"item": item});
    }
  })
  return $(itemsHTML);
}

// from http://codepen.io/desandro/pen/kwsJb
$.fn.masonryImagesReveal = function( $items ) {

  // append to container
  this.append( $items );

  // when all images have loaded, lay out the new batch
  if($(window).width() >= masonryMinWidth) {
    if(!$container.data('masonry')) { initializeMasonry(); }
    $items.imagesLoaded().always(function(instance) {
      $container.masonry( 'appended', $items );
    });
  }

  setShareHandlers()

  return this;
};

function initializeMasonry() {
  $container.masonry({
    itemSelector: '.item',
    columnWidth: 1,
    transitionDuration: 0,
    hiddenStyle: { opacity: 0 },
    visibleStyle: { opacity: 1 }
  });
}

// for when assets change, utility functions to automatically grab photo sizes
// should then bake sizes into json
function readImageSizes(data) {
  data.forEach(function(value, index) {
    getImageSize("img/"+value.imgSmall, this, function(item, size) {
      data[index].imgWidth = size.width;
      data[index].imgHeight = size.height;
    });
  })
}

// from http://stackoverflow.com/a/1093364/120290
function getImageSize(src, item, callback) {
  // create an offscreen image that isn't scaled but contains the same image.
  var img = new Image();
  img.src = src;

  // check if the image has finished loading
  img.onload = function() {
    callback(item, {width: img.width, height: img.height});
  };
}

// Social for individual items
function setShareHandlers() {
  $('.fa-twitter').click(function(event) {
    var itemId = $(event.target).parent().attr('href').split('#')[1]
    ga('send', 'event', 'share', 'click', 'twitter-' + itemId);
    ga('fashion.send', 'event', 'share', 'click', 'twitter-' + itemId);

    var quote = $(event.target).parents('.quote')
    var content = quote.find('.quote-content').text()
    var attribution = quote.find('.quote-attribution').text()
    var credit = quote.find('.quote-credit').text().trim()
    var shareText = content + ' —' + attribution + ', ' + credit
    var url = document.URL
    shareTwitter(shareText, url)
    return false
  })

  $('.fa-pinterest').click(function(event) {
    var itemId = $(event.target).parent().attr('href').split('#')[1]
    ga('send', 'event', 'share', 'click', 'pinterest-' + itemId);
    ga('fashion.send', 'event', 'share', 'click', 'pinterest-' + itemId);

    var target = $(event.target)
    var url = document.URL + target.parent().attr('href');
    var shareText = target.closest('.caption').find('.hed').text();
    var img = document.URL.split('#')[0] + target.closest('.item').find('img').attr('src')
    sharePinterest(shareText, url, img)
    return false
  })
}

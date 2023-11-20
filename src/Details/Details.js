function Details() {
    return (
        <>

            <section className="bg-black text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <h1><b>KNOW MORE <br></br>
                                <span className="text-warning">CONTACT US </span></b></h1>
                            <h4 className="text-warning">Address</h4>
                            <p className="item">S-357 2nd floor, Block S, Panchsheel Park South,<br></br> Panchsheel Park, New <br></br> Delhi, Delhi 110017</p>
                            <h4 className="text-warning">Enquiry</h4>
                            <p className="item">Email: customercare@firstfiddle.in</p>
                        </div>
                        <div className="col-md-6">
                            <form className="stop">
                                <h1 className="text-center text-white">CONTACT US!</h1>
                                <div className="mt-3">
                                    <label for="name">Full Name</label>
                                    <input type="text" className="form-control bg-black" id="name" placeholder="Enter your Name" name="name"></input>
                                </div>

                                <div className="mt-3">
                                    <label for="number">Phone Number</label>
                                    <input type="number" className="form-control bg-black" id="number" placeholder="Enter your Phone Number" name=""></input>
                                </div>
                                <div className="mt-3">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control bg-black" id="email" placeholder="Enter your Email" name=""></input>
                                </div>
                                <div class="mt-3">
                                    <label for="Message">Message</label>
                                    <textarea className="form-control bg-black" rows="5" placeholder="Enter your Message" id="Message" name="text"></textarea>
                                </div>
                                <div class="mt-3">
                                <button type="button" class="btn btn-light bute">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black text-light pt-5">
                <h1 className="text-center pt-5"><b>Ask Us<br></br>
                   <span className="text-warning">Anything</span></b></h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 invest">
                            <img src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fabout%2Ffb.png&w=64&q=75" alt="" className="img-fluid"></img>
                            <p>Why should I invest in F&B?<br></br><br></br>
                                Investing in F&B offers consistent demand, high returns, and diverse revenue streams. First Fiddle, a renowned restaurant, exemplifies success in this industry, making it a compelling investment choice.</p>
                        </div>
                        <div className="col-md-4 invest">
                            <img src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fabout%2Ffm.png&w=64&q=75" alt="" className="img-fluid"></img>
                            <p>What is the Franchise Model?<br></br><br></br>
                                The franchise model is a business arrangement where a franchisor grants a franchisee the right to operate a business using their brand, products, and systems in exchange for fees and royalties.</p>
                        </div>
                        <div className="col-md-4 invest">
                            <img src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fabout%2Fop.png&w=64&q=75" alt="" className="img-fluid"></img>
                            <p>What is the Onboarding Process?<br></br><br></br>
                                The Onboarding Process at First Fiddle Restaurant involves welcoming new team members, providing training, and ensuring a smooth transition into their roles for a seamless start.</p>
                        </div>
                        <div className="col-md-4 invest">
                            <img src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fabout%2Fin.png&w=64&q=75" alt="" className="img-fluid"></img>
                            <p>How much will be my investment?<br></br><br></br>
                                "Your investment in First Fiddle Restaurant will depend on the specific location and size of your chosen franchise. Contact us for a personalized investment estimate today."</p>
                        </div>
                        <div className="col-md-4 invest">
                            <img src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fabout%2Fsold.png&w=64&q=75" alt="" className="img-fluid"></img>
                            <p>How many franchise have you sold?<br></br><br></br>
                                First Fiddle Restaurants is proud to have sold over 50 franchise units worldwide, expanding our brand's presence and sharing our culinary excellence with discerning food lovers everywhere.</p>
                        </div>
                        <div className="col-md-4 invest">
                            <img src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fabout%2Fsf.png&w=64&q=75" alt="" className="img-fluid"></img>
                            <p>How much support will you offer?<br></br><br></br>
                                First Fiddle Restaurant offers exceptional support, ensuring your dining experience is flawless. We prioritize your needs and satisfaction to create memorable moments.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Details;
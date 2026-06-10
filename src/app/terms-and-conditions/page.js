const TearmsAndConditions = () => {

    {/* ── TERMS & CONDITIONS ── */ }

    return (
            <div className="m-24 bg-white/85 backdrop-blur-sm rounded-2xl p-6 max-w-5xl mx-auto shadow-2xl">
                <p className="text-md text-gray-600 leading-relaxed text-justify">
                    <span className="font-semibold">
                        * "Free electricity for 25 years"
                    </span>{" "}
                    refers to the expected lifespan and energy generation capacity of the solar power system, not zero-cost installation.<br />The customer must bear the initial cost of solar system installation, which may be partially offset by applicable government subsidies.<br />Actual savings and bill reduction depend on:<br />System size and configuration,<br />Daily energy consumption,<br />Sunlight availability and weather conditions,<br />Maintenance and cleaning of panels.<br />Electricity bills may not be completely eliminated due to:<br />Fixed charges by the local electricity authority,<br />Night-time grid usage (for on-grid systems),<br />Government subsidy amounts, eligibility, and disbursement timelines are subject to policies under schemes like{" "}
                    <span className="font-semibold">
                        PM Surya Ghar: Muft Bijli Yojana
                    </span>{" "}
                    and may change without prior notice. System performance may degrade gradually over time (typically ~0.5%–1% annually).<br />The 25-year period is based on industry-standard solar panel performance warranties, not a guarantee of zero electricity bills.<br />Maintenance, inverter replacement (if applicable), and other operational costs are not included in the "free electricity" claim.
                </p>
            </div>
    );
};

export default TearmsAndConditions;
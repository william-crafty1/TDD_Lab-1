describe("Test various methods and functions", function () {
    it("Testing constructor", function () {
        let test1 = new ChangeHandler(5)

        expect(test1.amountDue).toBe(5);
        expect(test1.cashTendered).toBe(0);
    });
    it("Testing InsertCoin(Quarter)", function () {
        let test1 = new ChangeHandler(10)
        test1.insertCoin("quarter");
        expect(test1.cashTendered).toBe(25);
    });
    it("Testing InsertCoin(Dime)", function () {
        let test1 = new ChangeHandler(10)
        test1.insertCoin("dime");
        expect(test1.cashTendered).toBe(10);
    });
    it("Testing InsertCoin(Nickel)", function () {
        let test1 = new ChangeHandler(10)
        test1.insertCoin("nickel");
        expect(test1.cashTendered).toBe(5);
    });
    it("Testing InsertCoin(Penny)", function () {
        let test1 = new ChangeHandler(10)
        test1.insertCoin("penny");
        expect(test1.cashTendered).toBe(1);
    });
    it("Testing InsertCoin(continue adding to total)", function () {
        let test1 = new ChangeHandler(10);
        test1.insertCoin("dime");
        test1.insertCoin("quarter");
        test1.insertCoin("nickel");
        test1.insertCoin("penny");
        expect(test1.cashTendered).toBe(41);
    });
    it("IsPaymentSufficient function is true if above amountDue", function () {
        let test1 = new ChangeHandler(10)
        test1.insertCoin("quarter");
        const isSufficient = test1.isPaymentSufficient();
        expect(test1.cashTendered).toBe(25);
        expect(isSufficient).toBeTruthy(true);
    });
    it("IsPaymentSufficient function is false if below amountDue", function () {
        let test1 = new ChangeHandler(10)
        test1.insertCoin("penny");
        const isSufficient = test1.isPaymentSufficient();
        expect(test1.cashTendered).toBe(1);
        expect(isSufficient).toBeFalsy(false);
    });
    it("IsPaymentSufficient function is true if equal amountDue", function () {
        let test1 = new ChangeHandler(10)
        test1.insertCoin("dime");
        const isSufficient = test1.isPaymentSufficient();
        expect(test1.cashTendered).toBe(10);
        expect(isSufficient).toBeTruthy(true);
    });
    it("giveChange function 32 change", function () {
        let test1 = new ChangeHandler(50);
        test1.cashTendered = 82;
        const change = test1.giveChange();
        expect(test1.cashTendered).toBe(82);
        expect(change.quarters).toBe(1);
        expect(change.dimes).toBe(0);
        expect(change.nickels).toBe(1);
        expect(change.pennies).toBe(2);
    });
    it("giveChange function 10 change", function () {
        let test1 = new ChangeHandler(10);
        test1.cashTendered = 20;
        const change = test1.giveChange();
        expect(test1.cashTendered).toBe(20);
        expect(change.quarters).toBe(0);
        expect(change.dimes).toBe(1);
        expect(change.nickels).toBe(0);
        expect(change.pennies).toBe(0);
    });
    it("giveChange function 27 change", function () {
        let test1 = new ChangeHandler(30)
        test1.cashTendered = 57;
        const change = test1.giveChange();
        expect(test1.cashTendered).toBe(57);
        expect(change.quarters).toBe(1);
        expect(change.dimes).toBe(0);
        expect(change.nickels).toBe(0);
        expect(change.pennies).toBe(2);
    });
    it("giveChange function 68 change", function () {
        let test1 = new ChangeHandler(60)
        test1.cashTendered = 128;
        const change = test1.giveChange();
        expect(test1.cashTendered).toBe(128);
        expect(change.quarters).toBe(2);
        expect(change.dimes).toBe(1);
        expect(change.nickels).toBe(1);
        expect(change.pennies).toBe(3);
    });
});
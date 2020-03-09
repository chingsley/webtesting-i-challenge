const enhancer = require("./enhancer.js");

describe("the enhancer: ", () => {
  const item1 = { name: "item name", durability: 34, enhancement: 14 };
  const item2 = { name: "item name", durability: 65, enhancement: 20 };
  const item3 = { name: "item name", durability: 76, enhancement: 0 };
  describe("the repair method", () => {
    it("it should accept an item object with the durability restored to 100", () => {
      const result = enhancer.repair(item1);
      expect(result.durability).toBe(100);
    });

    it("it should return an object with the right properties", () => {
      const returnValue = enhancer.repair(item1);
      expect(returnValue).toHaveProperty("name");
      expect(returnValue).toHaveProperty("durability");
      expect(returnValue).toHaveProperty("enhancement");
    });
  });

  describe("the success method", () => {
    it("it should increase the enhancement level by 1 if that enhancement level is less than 20", () => {
      const result = enhancer.succeed(item1);
      expect(result.enhancement).toBe(item1.enhancement + 1);
    });

    it("it should return the enhancement unchanged if the inhancement level is 20", () => {
      const result = enhancer.succeed(item2);
      expect(result.enhancement).toBe(item2.enhancement);
    });

    it("it should return the durability of the item unchanged", () => {
      const result = enhancer.succeed(item2);
      expect(result.durability).toBe(item2.durability);
    });
  });

  describe("the fail method", () => {
    it("it should decrease the durability by 5 if enhancement is less than 15", () => {
      const result = enhancer.fail(item1);
      expect(result.durability).toBe(item1.durability - 5);
    });

    it("it should decrease the durability by 10 if enhancement is greater than 15", () => {
      const result = enhancer.fail(item2);
      expect(result.durability).toBe(item2.durability - 10);
    });

    it("it should decrease the enhancement by 1 the incoming enhancement is greater than 1", () => {
      const result = enhancer.fail(item2);
      expect(result.enhancement).toBe(item2.enhancement - 1);
    });
  });

  describe("the get method", () => {
    it("it should add [+enhancement value] to the name if enhancement > 0", () => {
      const result = enhancer.get(item1);
      expect(result.name).toBe("[+14] item name");
    });

    it("it should not change the item name if enhancement NOT greater than 0", () => {
      const result = enhancer.get(item3);
      expect(result.name).toBe("item name");
    });
  });
});

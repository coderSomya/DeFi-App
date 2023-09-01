const Defi = artifacts.require("defi");

contract("defi", (accounts) => {
  let defiInstance;

  beforeEach(async () => {
    defiInstance = await Defi.new({ from: accounts[0] });
  });

  it("should allow sending a memo", async () => {
    const name = "test";
    const message = "test";
    const value = web3.utils.toWei("0.1", "ether");
    const sender = accounts[1];

    const initialBalance = await web3.eth.getBalance(defiInstance.address);

    await defiInstance.send(name, message, { from: sender, value: value });

    const memos = await defiInstance.getMemos();

    assert.equal(memos.length, 1, "Memo count should be 1");
    assert.equal(memos[0].name, name, "Name should match");
    assert.equal(memos[0].message, message, "Message should match");

    const finalBalance = await web3.eth.getBalance(defiInstance.address);

    assert.equal(
      finalBalance - initialBalance,
      value,
      "Contract balance should increase by the sent value"
    );
  });
});

new sjcl.test.TestCase("Serpent known-answer tests", function (cb) {
  if (!sjcl.cipher.serpent) {
    this.unimplemented();
    cb && cb();
    return;
  }
  
  var i, kat = sjcl.test.vector.serpent, tv, len, serpent;
  
  for (i=0; i<kat.length; i++) {
    tv = kat[i];
    len = 32 * tv.key.length;
    serpent = new sjcl.cipher.serpent(tv.key);
    this.require(sjcl.bitArray.equal(serpent.encrypt(tv.pt), tv.ct), "encrypt "+len+" #"+i);
    this.require(sjcl.bitArray.equal(serpent.decrypt(tv.ct), tv.pt), "decrypt "+len+" #"+i);
  }
  cb && cb();
});

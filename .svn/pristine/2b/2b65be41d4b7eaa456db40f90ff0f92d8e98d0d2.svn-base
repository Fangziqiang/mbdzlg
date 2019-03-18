String.prototype.endWith = function (s) {
	if (s == null || s == "" || this.length == 0 || s.length > this.length) {
		return false;
	}
	if (this.substring(this.length - s.length) == s) {
		return true;
	} else {
		return false;
	}
	return true;
};
String.prototype.startWith = function (s) {
	if (s == null || s == "" || this.length == 0 || s.length > this.length) {
		return false;
	}
	if (this.substr(0, s.length) == s) {
		return true;
	} else {
		return false;
	}
	return true;
};
String.prototype.length2 = function () {
	var cArr = this.match(/[^\x00-\xff]/ig);
	return this.length + (cArr == null ? 0 : cArr.length);
};
String.prototype.trim = function () {
	var i, b = 0, e = this.length;
	for (i = 0; i < this.length; i++) {
		if (this.charAt(i) != " ") {
			b = i;
			break;
		}
	}
	if (i == this.length) {
		return "";
	}
	for (i = this.length - 1; i >= b; i--) {
		if (this.charAt(i) != " ") {
			e = i;
			break;
		}
	}
	return this.substring(b, e + 1);
};
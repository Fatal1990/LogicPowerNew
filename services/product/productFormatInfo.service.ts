export class ProductFormatInfoService {
	static formatWeight(val: number) {
		return val ? val.toFixed(2) : '-/-';
	}

	static formatVolume(val: number) {
		return val ? val.toFixed(5) : '-/-';
	}
}

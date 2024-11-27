//%inlineInputMode=inline
namespace math {

    //% blockid=Bmath_numxor
    //% block="Xor $nma ^ $nmb"
    //% group="Bmath-xor"
    //% inlineInputMode=inline
    export function NumXor(nma: number, nmb: number): number {
        return nma ^ nmb
    }

    //% blockid=Bmath_charidx
    //% block="Char code in $txt at $cidx"
    //% group="Bmath-CharCodeIndex"
    //% inlineInputMode=inline
    export function CharIdxAt(txt: string, cidx: number): number {
        return txt.charCodeAt(cidx)
    }

    //% blockid=Bmath_percentage
    //% block="GetPercentage in $value and $maxValue from $maxPercentage"
    //% group="Bmath-percentage"
    //% inlineInputMode=inline
    export function calculatePercentage(value: number, maxValue: number, maxPercentage: number): number {
        value = Math.min(value, maxValue)
        let percentage = (value / maxValue) * maxPercentage;
        return Math.min(percentage, maxPercentage);
    }

    let anmt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let anml = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    //% blockid=Bmath_dec2base
    //% block="convert $nvl in base $bvl to digit $dvl"
    //% group="Bmath-DecBase"
    //% inlineInputMode=inline
    export function decEncode(nvl: number, bvl: number, dvl: number): string {
        let sti = ""
        let ani = nvl
        if (ani > 0) {
            while (ani > 0) {
                sti = "" + anmt.charAt(ani % bvl) + sti
                ani = Math.floor(ani / bvl)
            }
        } else {
            sti = anmt.charAt(0)
        }
        if (dvl <= 0) {
            return sti
        }
        if (dvl - sti.length > 0) {
            while (dvl - sti.length > 0) {
                sti = "" + anmt.charAt(0) + sti
            }
        }
        return sti
    }

    //% blockid=Bmath_base2dec
    //% block="convert $tvl to dec in $bvl"
    //% group="Bmath-DecBase"
    //% inlineInputMode=inline
    export function decDecode(tvl: string, bvl: number): number {
        let stl = tvl.length
        let vld = 0
        let nvl = 0
        let vix = 0
        for (let nix = stl - 1; nix >= 0; nix--) {
            vix = anmt.indexOf(tvl.charAt(nix))
            if (vld == 0) {
                nvl += vix
                vld = bvl
            } else {
                nvl += vix * vld
                vld = vld * bvl
            }
        }
        return nvl
    }

    //% blockid=Bmath_decsum
    //% block="sum decimal in $nvl and $bvl"
    //% group="Bmath-DecBase-sum"
    //% inlineInputMode=inline
    export function sumDecimal(nvl: number, bvl: number): number {
        let dvl = 0
        while (nvl >= dvl) {
            if (dvl == 0) {
                dvl = bvl
            } else {
                dvl = dvl * bvl
            }
        }
        return dvl
    }

    //% blockid=Bmath_declensum
    //% block="Sum Digit At $nvl In $bvl"
    //% group="Bmath-DecBase-sum"
    //% inlineInputMode=inline
    export function sumDecDigit(nvl: number, bvl: number): number {
        let dvl = 0
        let dvi = 0
        while (nvl >= dvl) {
            if (dvl == 0) {
                dvi += 1
                dvl = bvl
            } else {
                dvi += 1
                dvl = dvl * bvl
            }
        }
        return dvl
    }

    //% blockid=Bmath_binxor
    //% block="Bin Xor in $sva and $svb"
    //% group="Bmath-DecBase-xor"
    //% inlineInputMode=inline
    export function BinXor(sva: string, svb: string): string {
        let tvl = ""
        if (sva.length != svb.length) {
            return tvl
        }
        for (let six: number = 0; six < sva.length; six++) {
            if (sva.charAt(six) != svb.charAt(six)) {
                tvl = "" + tvl + "1"
            } else {
                tvl = "" + tvl + "0"
            }
        }
        return tvl
    }

    //% blockid=Bmath_dec2bin
    //% block="dec convert $nvl to bin in $dvl"
    //% group="Bmath-DecBase"
    //% inlineInputMode=inline
    export function dec2bin(nvl: number, dvl: number): string {
        let sti = ""
        let ani = nvl
        if (ani > 0) {
            while (ani > 0) {
                sti = "" + anmt.charAt(ani % 2) + sti
                ani = Math.floor(ani / 2)
            }
        } else {
            sti = anmt.charAt(0)
        }
        if (dvl <= 0) {
            return sti
        }
        if (dvl - sti.length > 0) {
            while (dvl - sti.length > 0) {
                sti = "" + anmt.charAt(0) + sti
            }
        }
        return sti
    }

    //% blockid=Bmath_bin2dec
    //% block="bin convert $tvl to dec"
    //% group="Bmath-DecBase"
    //% inlineInputMode=inline
    export function bin2dec(tvl: string): number {
        let stl = tvl.length
        let vld = 0
        let nvl = 0
        let vix = 0
        for (let nix = 0; nix < tvl.length; nix++) {
            vix = anmt.indexOf(tvl.charAt((stl - 1) - nix))
            if (vld == 0) {
                nvl += vix
                vld = 2
            } else {
                nvl += vix * vld
                vld = vld * 2
            }
        }
        return nvl
    }

    //% blockid=Bmath_dec2hex
    //% block="dec convert $nvl to hex in $dvl"
    //% group="Bmath-DecBase"
    //% inlineInputMode=inline
    export function dec2hex(nvl: number, dvl: number): string {
        let sti = ""
        let ani = nvl
        if (ani > 0) {
            while (ani > 0) {
                sti = "" + anmt.charAt(ani % 16) + sti
                ani = Math.floor(ani / 16)
            }
        } else {
            sti = anmt.charAt(0)
        }
        if (dvl <= 0) {
            return sti
        }
        if (dvl - sti.length > 0) {
            while (dvl - sti.length > 0) {
                sti = "" + anmt.charAt(0) + sti
            }
        }
        return sti
    }

    //% blockid=Bmath_hex2dec
    //% block="hex convert $tvl to dec"
    //% group="Bmath-DecBase"
    //% inlineInputMode=inline
    export function hex2dec(tvl: string): number {
        let stl = tvl.length
        let vld = 0
        let nvl = 0
        let vix = 0
        for (let nix = 0; nix < tvl.length; nix++) {
            vix = anmt.indexOf(tvl.charAt((stl - 1) - nix))
            if (vld == 0) {
                nvl += vix
                vld = 16
            } else {
                nvl += vix * vld
                vld = vld * 16
            }
        }
        return nvl
    }

    //% blockid=Bmath_dec2oct
    //% block="dec convert $nvl to oct in $dvl"
    //% group="Bmath-DecBase"
    //% inlineInputMode=inline
    export function dec2oct(nvl: number, dvl: number): string {
        let sti = ""
        let ani = nvl
        if (ani > 0) {
            while (ani > 0) {
                sti = "" + anmt.charAt(ani % 8) + sti
                ani = Math.floor(ani / 8)
            }
        } else {
            sti = anmt.charAt(0)
        }
        if (dvl <= 0) {
            return sti
        }
        if (dvl - sti.length > 0) {
            while (dvl - sti.length > 0) {
                sti = "" + anmt.charAt(0) + sti
            }
        }
        return sti
    }

    //% blockid=Bmath_oct2dec
    //% block="oct convert $tvl to dec"
    //% group="Bmath-DecBase"
    //% inlineInputMode=inline
    export function oct2dec(tvl: string): number {
        let stl = tvl.length
        let vld = 0
        let nvl = 0
        let vix = 0
        for (let nix = 0; nix < tvl.length; nix++) {
            vix = anmt.indexOf(tvl.charAt((stl - 1) - nix))
            if (vld == 0) {
                nvl += vix
                vld = 8
            } else {
                nvl += vix * vld
                vld = vld * 8
            }
        }
        return nvl
    }

}

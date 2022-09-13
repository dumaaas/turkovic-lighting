import {
    defineStore
} from 'pinia'

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        products: [{
                name: 'TL1',
                type: 'Pendant luminaire',
                lightSource: 'LED',
                lightDistribution: ['PRO', 'OPAL'],
                housingColor: ['GO', 'B5024', 'B6034', 'WH', 'G6019', 'G6005', 'GA'],
                length: ['960', '1150', '1342', '1533'],
                colorTemperature: ['3000K', '4000K'],
                electricPower: '33-58w',
                ligthDirection: ['Direct', 'Direct/Indirect'],
                control: ['on/off', 'DALI'],
                flux: null,
                ra: '>80',
                weight: '1.2 - 2.7 kg',
                operatingVoltage: '230V 50Hz',
                images: ['oak', 'antico', 'white'],
            },
            {
                name: 'TL2',
                type: 'Ceiling luminaire',
                lightSource: 'LED',
                lightDistribution: ['PRO', 'OPAL'],
                housingColor: ['GO', 'B5024', 'B6034', 'WH', 'G6019', 'G6005', 'GA'],
                length: ['960', '1150', '1342', '1533'],
                colorTemperature: ['3000K', '4000K'],
                electricPower: '33-58w',
                ligthDirection: ['Direct', 'Direct/Indirect'],
                control: ['on/off', 'DALI'],
                flux: null,
                ra: '>80',
                weight: '1.2 - 2.7 kg',
                operatingVoltage: '230V 50Hz',
                images: ['oak', 'antico', 'white']
            },
            {
                name: 'TL3',
                type: 'Wall luminaire',
                lightSource: 'LED',
                lightDistribution: ['PRO', 'OPAL'],
                housingColor: ['GO', 'B5024', 'B6034', 'WH', 'G6019', 'G6005', 'GA'],
                length: ['960', '1150', '1342', '1533'],
                colorTemperature: ['3000K', '4000K'],
                electricPower: '33-58w',
                ligthDirection: ['Direct', 'Direct/Indirect'],
                control: ['on/off', 'DALI'],
                flux: null,
                ra: '>80',
                weight: '1.2 - 2.7 kg',
                operatingVoltage: '230V 50Hz',
                images: ['oak', 'antico', 'white']
            }
        ],
        selectedProducts: [],
        showError: false,
    }),
    getters: {
        getProduct: (state) => {
            return (productName) => state.products.find((p) => p.name === productName)
        }
    },
    actions: {
        addSelectedProduct(payload) {
            var doesExist = this.selectedProducts.find(p => p.dataPass === payload.dataPass);
            if (!doesExist) {
                this.selectedProducts.push(payload)
                this.showError = false;
            } else {
                console.log('odje')
                this.showError = true;
                console.log(this.showError)
            }
        },
        setShowError(payload) {
            this.showError = payload;
        },
        removeSelectedProduct(payload) {
            var index = this.selectedProducts.findIndex(p => p.dataPass === payload.dataPass);
            this.selectedProducts.splice(index, 1);
        }
    },
})
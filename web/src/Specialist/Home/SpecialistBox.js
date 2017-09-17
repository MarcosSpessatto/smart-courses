import Component from 'inferno-component';
import CardItem from '../../Common/Card-Item/CardItem';
import Modal from '../../Common/Modal/Modal';
import AreaForm from '../Area/AreaForm';
import AreaList from '../Area/AreaList';
import ModalityForm from '../Modality/ModalityForm';
import ModalityList from '../Modality/ModalityList';

class SpecialistBox extends Component {


    constructor() {
        super();

        this.cards = [
            {
                title: 'Áreas',
                name: 'area',
                listComponent: AreaList,
                formComponent: AreaForm
            },
            {
                title: 'Modalidade de Cursos',
                name: 'modality',
                listComponent: ModalityList,
                formComponent: ModalityForm
            },
            // {
            //     title: 'Funcionários',
            //     name: 'employees',
            //     listComponent: EmployeeList,
            //     formComponent: EmployeeForm
            // },
            // {
            //     title: 'Cursos',
            //     name: 'courses'
            // },
            // {
            //     title: 'Setor',
            //     name: 'sectors'
            // },
            // {
            //     title: 'Professores',
            //     name: 'teachers'
            // }
        ];
    }

    render() {
        return (
            <div className="row">
                <h4 className="text-center bold">Área do especialista</h4>
                {this
                    .cards
                    .map(card => {
                        return (
                            <div>
                                <CardItem
                                    title={card.title}
                                    name={card.name}>
                                </CardItem>

                                <Modal
                                    title={`Listagem de ${card.title}`}
                                    name={`${card.name}-list`}
                                    componentContent={card.listComponent}>
                                </Modal>

                                <Modal
                                    title={`Adicionar ${card.title}`}
                                    name={`${card.name}-add`}
                                    componentContent={card.formComponent}>
                                </Modal>
                            </div>
                        )
                    })}
            </div>
        );
    }
}

export default SpecialistBox;

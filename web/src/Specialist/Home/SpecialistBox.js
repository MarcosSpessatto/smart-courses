import Component from 'inferno-component';
import CardItem from '../../Common/CardItem/CardItem';
import Modal from '../../Common/Modal/Modal';
import AreaForm from '../Area/AreaForm';
import AreaList from '../Area/AreaList';
import ModalityForm from '../Modality/ModalityForm';
import ModalityList from '../Modality/ModalityList';
import SectorForm from '../Sector/SectorForm';
import SectorList from '../Sector/SectorList';
import TeacherForm from '../Teacher/TeacherForm';
import TeacherList from '../Teacher/TeacherList';
import EmployeeForm from '../Employee/EmployeeForm';
import EmployeeList from '../Employee/EmployeeList';
import CourseForm from '../Course/CourseForm';
import CourseList from '../Course/CourseList';

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
            {
                title: 'Setores',
                name: 'sector',
                listComponent: SectorList,
                formComponent: SectorForm
            },
            {
                title: 'Professores',
                name: 'teacher',
                listComponent: TeacherList,
                formComponent: TeacherForm
            },
            {
                title: 'Funcionários',
                name: 'employee',
                listComponent: EmployeeList,
                formComponent: EmployeeForm
            },
            {
                title: 'Cursos',
                name: 'course',
                listComponent: CourseList,
                formComponent: CourseForm
            },

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

import { Font, Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Загружаем шрифты
Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
        },
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
            fontWeight: 'bold',
        }
    ]
});

const styles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: '#ffffff',
    },
    section: {
        marginBottom: 10,
        padding: 10,
        borderBottom: '1px solid #e4e4e4',
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    field: {
        fontSize: 12,
        marginBottom: 6,
        fontFamily: 'Roboto',
    },
    fieldLabel: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    text: {
        fontFamily: 'Roboto',
    },
});

const PDFDocument = ({ data }) => (
    <PDFViewer style={{ width: '100%', height: '90vh' }}>
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text>Резюме</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.fieldLabel}>Ожидаемая позиция:</Text>
                    <Text style={styles.field}>{data.DesiredPosition}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.fieldLabel}>Полное имя:</Text>
                    <Text style={styles.field}>{data.FullName}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.fieldLabel}>Город:</Text>
                    <Text style={styles.field}>{data.City}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.fieldLabel}>Образование:</Text>
                    <Text style={styles.field}>{data.Education}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.fieldLabel}>Опыт работы:</Text>
                    <Text style={styles.field}>{data.Experience}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.fieldLabel}>Ожидаемая зарплата:</Text>
                    <Text style={styles.field}>{data.ExpectedSalary}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.fieldLabel}>Номер телефона:</Text>
                    <Text style={styles.field}>{data.PhoneNumber}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.fieldLabel}>email:</Text>
                    <Text style={styles.field}>{data.email}</Text>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default PDFDocument;

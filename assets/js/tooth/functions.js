function name_of_tooth_part(tooth_nr)
{
    var tooth_part = new Array();

    if((tooth_nr >= 14 && tooth_nr <= 18) || tooth_nr == 54 || tooth_nr == 55)
    {
        tooth_part[0] = 'Buccal';
        tooth_part[1] = 'Mesial';
        tooth_part[2] = 'Lingual';
        tooth_part[3] = 'Distal';
        tooth_part[4] = 'Occlusal';
        tooth_part[5] = 'Cervical-buccal';
        tooth_part[6] = 'Cervical-lingual';
    }
    if((tooth_nr >= 24 && tooth_nr <= 28) || tooth_nr == 64 || tooth_nr == 65)
    {
        tooth_part[0] = 'Buccal';
        tooth_part[1] = 'Distal';
        tooth_part[2] = 'Lingual';
        tooth_part[3] = 'Mesial';
        tooth_part[4] = 'Occlusal';
        tooth_part[5] = 'Cervical-buccal';
        tooth_part[6] = 'Cervical-lingual';
    }
    if((tooth_nr >= 44 && tooth_nr <= 48) || tooth_nr == 84 || tooth_nr == 85)
    {
        tooth_part[0] = 'Lingual';
        tooth_part[1] = 'Mesial';
        tooth_part[2] = 'Buccal';
        tooth_part[3] = 'Distal';
        tooth_part[4] = 'Occlusal';
        tooth_part[5] = 'Cervical-buccal';
        tooth_part[6] = 'Cervical-lingual';
    }
    if((tooth_nr >= 34 && tooth_nr <= 38) || tooth_nr == 74 || tooth_nr == 75)
    {
        tooth_part[0] = 'Lingual';
        tooth_part[1] = 'Distal';
        tooth_part[2] = 'Buccal';
        tooth_part[3] = 'Mesial';
        tooth_part[4] = 'Occlusal';
        tooth_part[5] = 'Cervical-buccal';
        tooth_part[6] = 'Cervical-lingual';
    }
    // Tanden
    if((tooth_nr >= 11 && tooth_nr <= 13) || (tooth_nr >= 51 && tooth_nr <= 53))
    {
        tooth_part[0] = 'Labial';
        tooth_part[1] = 'Mesial';
        tooth_part[2] = 'Lingual';
        tooth_part[3] = 'Distal';
        tooth_part[4] = 'Incisal';
        tooth_part[5] = 'Cervical-labial';
        tooth_part[6] = 'Cervical-lingual';
    }
    if((tooth_nr >= 21 && tooth_nr <= 23) || (tooth_nr >= 61 && tooth_nr <= 63))
    {
        tooth_part[0] = 'Labial';
        tooth_part[1] = 'Distal';
        tooth_part[2] = 'Lingual';
        tooth_part[3] = 'Mesial';
        tooth_part[4] = 'Incisal';
        tooth_part[5] = 'Cervical-labial';
        tooth_part[6] = 'Cervical-lingual';
    }
    if((tooth_nr >= 41 && tooth_nr <= 43) || (tooth_nr >= 81 && tooth_nr <= 83))
    {
        tooth_part[0] = 'Lingual';
        tooth_part[1] = 'Mesial';
        tooth_part[2] = 'Labial';
        tooth_part[3] = 'Distal';
        tooth_part[4] = 'Incisal';
        tooth_part[5] = 'Cervical-labial';
        tooth_part[6] = 'Cervical-lingual';
    }
    if((tooth_nr >= 31 && tooth_nr <= 33) || (tooth_nr >= 71 && tooth_nr <= 73))
    {
        tooth_part[0] = 'Lingual';
        tooth_part[1] = 'Distal';
        tooth_part[2] = 'Labial';
        tooth_part[3] = 'Mesial';
        tooth_part[4] = 'Incisal';
        tooth_part[5] = 'Cervical-labial';
        tooth_part[6] = 'Cervical-lingual';
    }

    return tooth_part;
}

function name_of_rct_part(tooth_nr, procedure)
{
    var procedure_filled_in = false;

    if(typeof procedure !== 'undefined' && procedure != '')
        procedure_filled_in = true;

    if(procedure_filled_in == true)
    {
        var rct_parts = new Array();

        if(procedure.indexOf('single') != -1)
        {
            rct_parts_title = 'Single canal';

            rct_parts[0] = 'Single';
        }

        else if(procedure.indexOf('two') != -1)
        {
            if(tooth_nr == 18 || tooth_nr == 17 || tooth_nr == 16 || tooth_nr == 15 || tooth_nr == 14 || tooth_nr == 24 || tooth_nr == 25 || tooth_nr == 26 || tooth_nr == 27 || tooth_nr == 28 || tooth_nr == 35 || tooth_nr == 34 || tooth_nr == 44 || tooth_nr == 45 || tooth_nr == 55 || tooth_nr == 54 || tooth_nr == 64 || tooth_nr == 65 || tooth_nr == 75 || tooth_nr == 74 || tooth_nr == 84 || tooth_nr == 85)
            {
                rct_parts_title = 'Two canals';

                rct_parts[0] = 'Buccal';
                rct_parts[1] = 'Palatal';
            }

            else if(tooth_nr == 13 || tooth_nr == 12 || tooth_nr == 11 || tooth_nr == 21 || tooth_nr == 22 || tooth_nr == 23 || tooth_nr == 33 || tooth_nr == 32 || tooth_nr == 31 || tooth_nr == 41 || tooth_nr == 42 || tooth_nr == 43 || tooth_nr == 53 || tooth_nr == 52 || tooth_nr == 51 || tooth_nr == 61 || tooth_nr == 62 || tooth_nr == 63 || tooth_nr == 73 || tooth_nr == 72 || tooth_nr == 71 || tooth_nr == 81 || tooth_nr == 82 || tooth_nr == 83)
            {
                rct_parts_title = 'Two canals';

                rct_parts[0] = 'Labial';
                rct_parts[1] = 'Palatal';
            }

            else if(tooth_nr == 38 || tooth_nr == 37 || tooth_nr == 36 || tooth_nr == 46 || tooth_nr == 47 || tooth_nr == 48)
            {
                rct_parts_title = 'Two canals';

                rct_parts[0] = 'Mesial';
                rct_parts[1] = 'Distal';
            }
        }

        else if(procedure.indexOf('three') != -1)
        {
            if(tooth_nr == 18 || tooth_nr == 17 || tooth_nr == 16 || tooth_nr == 26 || tooth_nr == 27 || tooth_nr == 28 || tooth_nr == 55 || tooth_nr == 54 || tooth_nr == 64 || tooth_nr == 65)
            {
                rct_parts_title = 'Three canals';

                rct_parts[0] = 'Mesio-buccal';
                rct_parts[1] = 'Disto-buccal';
                rct_parts[2] = 'Palatal';
            }

            else if(tooth_nr == 38 || tooth_nr == 37 || tooth_nr == 36 || tooth_nr == 46 || tooth_nr == 47 || tooth_nr == 48 || tooth_nr == 75 || tooth_nr == 74 || tooth_nr == 84 || tooth_nr == 85)
            {
                rct_parts_title = 'Three canals';

                rct_parts[0] = 'Mesio-buccal';
                rct_parts[1] = 'Mesio-lingual';
                rct_parts[2] = 'Distal';
            }
        }

        else if(procedure.indexOf('four') != -1)
        {
            if(tooth_nr == 38 || tooth_nr == 37 || tooth_nr == 36 || tooth_nr == 46 || tooth_nr == 47 || tooth_nr == 48 || tooth_nr == 75 || tooth_nr == 74 || tooth_nr == 84 || tooth_nr == 85)
            {
                rct_parts_title = 'Four canals';

                rct_parts[0] = 'Mesio-buccal';
                rct_parts[1] = 'Mesio-lingual';
                rct_parts[2] = 'Disto-buccal';
                rct_parts[3] = 'Disto-lingual';
            }
        }

        else if(procedure.indexOf('five') != -1)
        {
            if(tooth_nr == 38 || tooth_nr == 37 || tooth_nr == 36 || tooth_nr == 46 || tooth_nr == 47 || tooth_nr == 48)
            {
                rct_parts_title = 'Five canals';

                rct_parts[0] = 'Mesio-buccal-1';
                rct_parts[1] = 'Mesio-buccal-2';
                rct_parts[2] = 'Mesio-lingual';
                rct_parts[3] = 'Disto-buccal';
                rct_parts[4] = 'Disto-lingual';
            }
        }

        else if(procedure.indexOf('six') != -1)
        {
//            alert("Geen opties?");
        }
        else
        {
            procedure_filled_in = false;
        }
    }
    
    if(procedure_filled_in == false)
    {
        var rct_parts = {};

        // single canal
        rct_parts['Single canal'] = new Array('Single');

        // two canals
        if(tooth_nr == 18 || tooth_nr == 17 || tooth_nr == 16 || tooth_nr == 15 || tooth_nr == 14 || tooth_nr == 24 || tooth_nr == 25 || tooth_nr == 26 || tooth_nr == 27 || tooth_nr == 28 || tooth_nr == 35 || tooth_nr == 34 || tooth_nr == 44 || tooth_nr == 45 || tooth_nr == 55 || tooth_nr == 54 || tooth_nr == 64 || tooth_nr == 65 || tooth_nr == 75 || tooth_nr == 74 || tooth_nr == 84 || tooth_nr == 85)
        {
            rct_parts['Two canals'] = new Array('Buccal'
                                                ,'Palatal');
        }

        else if(tooth_nr == 13 || tooth_nr == 12 || tooth_nr == 11 || tooth_nr == 21 || tooth_nr == 22 || tooth_nr == 23 || tooth_nr == 33 || tooth_nr == 32 || tooth_nr == 31 || tooth_nr == 41 || tooth_nr == 42 || tooth_nr == 43 || tooth_nr == 53 || tooth_nr == 52 || tooth_nr == 51 || tooth_nr == 61 || tooth_nr == 62 || tooth_nr == 63 || tooth_nr == 73 || tooth_nr == 72 || tooth_nr == 71 || tooth_nr == 81 || tooth_nr == 82 || tooth_nr == 83)
        {
            rct_parts['Two canals'] = new Array('Labial'
                                                ,'Palatal');
        }

        else if(tooth_nr == 38 || tooth_nr == 37 || tooth_nr == 36 || tooth_nr == 46 || tooth_nr == 47 || tooth_nr == 48)
        {
            rct_parts['Two canals'] = new Array('Mesial'
                                                ,'Distal');
        }

        // three canals
        if(tooth_nr == 18 || tooth_nr == 17 || tooth_nr == 16 || tooth_nr == 26 || tooth_nr == 27 || tooth_nr == 28 || tooth_nr == 55 || tooth_nr == 54 || tooth_nr == 64 || tooth_nr == 65)
        {
            rct_parts['Three canals'] = new Array('Mesio-buccal'
                                                ,'Disto-buccal'
                                                ,'Palatal');
        }

        else if(tooth_nr == 38 || tooth_nr == 37 || tooth_nr == 36 || tooth_nr == 46 || tooth_nr == 47 || tooth_nr == 48 || tooth_nr == 75 || tooth_nr == 74 || tooth_nr == 84 || tooth_nr == 85)
        {
            rct_parts['Three canals'] = new Array('Mesio-buccal'
                                                ,'Mesio-lingual'
                                                ,'Distal');
        }

        // four canals
        if(tooth_nr == 38 || tooth_nr == 37 || tooth_nr == 36 || tooth_nr == 46 || tooth_nr == 47 || tooth_nr == 48 || tooth_nr == 75 || tooth_nr == 74 || tooth_nr == 84 || tooth_nr == 85)
        {
            rct_parts['Four canals'] = new Array('Mesio-buccal'
                                                ,'Mesio-lingual'
                                                ,'Disto-buccal'
                                                ,'Disto-lingual');
        }

        // five canals
        if(tooth_nr == 38 || tooth_nr == 37 || tooth_nr == 36 || tooth_nr == 46 || tooth_nr == 47 || tooth_nr == 48)
        {
            rct_parts['Five canals'] = new Array('Mesio-buccal-1'
                                                ,'Mesio-buccal-2'
                                                ,'Mesio-lingual'
                                                ,'Disto-buccal'
                                                ,'Disto-lingual');
        }
    }

    return {procedure_filled_in: procedure_filled_in, rct_parts: rct_parts};
}

function create_tooth_part_options(where, kind, id, selected, tooth, status_type)
{
	
			console.log("create_tooth_part_options");
		console.log(where);
		console.log(kind);
		console.log(id);
		console.log(selected);
		console.log(tooth);	
		console.log(status_type);
    if(typeof selected === 'undefined')
        var selected = [];

    if(typeof selected['tooth_part'] === 'undefined')
        selected['tooth_part'] = '';

    if(typeof tooth === 'undefined')
        var tooth = $(where + ' #tooth').val();
        
    if(typeof status_type === 'undefined')
        var status_type = '';

    var tooth_parts = name_of_tooth_part(tooth);

    if(status_type != 'ICDAS')
    {
        var select_all_option = '<i>If applicable</i><br>'
                                + '<img src="' + base_url + 'assets/images/tooth/subject_arrow.gif">'
                                + '<input type="checkbox" name="tooth_parts_select_all_' + id + '" id="tooth_parts_select_all_' + id + '" value="5" class="select_all" data-target="tooth_parts_' + id + '" style="margin-left: 3px"> <label for="tooth_parts_select_all_' + id + '">All surfaces</label><br>'
                                + '<i>or select</i><br>'
    }
    else
        var select_all_option = '<i>Please select</i><br>';

    var tooth_part_options = select_all_option
                            + '<img src="' + base_url + 'assets/images/tooth/subject_arrow.gif" style="float: left; margin-top: 4px;">';

                        /*
                        + '<input type="checkbox" name="' + kind + '_options[' + id + '][tooth_part][0]" value="1" class="tooth_parts_' + id + '" style="margin-left: 3px"> ' + tooth_parts[0] + '<br>'
                        + '<input type="checkbox" name="' + kind + '_options[' + id + '][tooth_part][1]" value="2" class="tooth_parts_' + id + '" style="margin-left: 10px"> ' + tooth_parts[1] + '<br>'
                        + '<input type="checkbox" name="' + kind + '_options[' + id + '][tooth_part][2]" value="3" class="tooth_parts_' + id + '" style="margin-left: 10px"> ' + tooth_parts[2] + '<br>'
                        + '<input type="checkbox" name="' + kind + '_options[' + id + '][tooth_part][3]" value="4" class="tooth_parts_' + id + '" style="margin-left: 10px"> ' + tooth_parts[3] + '<br>'
                        + '<input type="checkbox" name="' + kind + '_options[' + id + '][tooth_part][4]" value="5" class="tooth_parts_' + id + '" style="margin-left: 10px"> ' + tooth_parts[4];
                        */

    for(var i in tooth_parts)
    {
        /*
        if(where == '#baseline_dental_record')
            var max_i = 4;
        else
            var max_i = -1;
        */

//        if(i <= max_i || max_i == -1)
//        {
            if(i == 0)
                var margin_left = 3;
            else
                var margin_left = 10;
			//console.log(selected['tooth_part'].indexOf(i)) is always -1;
            if(selected['tooth_part'].indexOf(i) != -1)
				
                var surface_selected = true;
            else
                var surface_selected = false;
            

            if(status_type == 'ICDAS' && surface_selected == true)
				
                tooth_part_options += create_icdas_options(kind, id, i, false, selected['icdas_options'], selected['cast_options']);
		   //tooth_part_options += create_icdas_options(kind, id, i, true, undefined, undefined);
                
            tooth_part_options += '<input type="checkbox" name="' + kind + '_options[' + id + '][tooth_part][' + (parseInt(i, 10)+1 ) + ']" id="' + kind + '_options_' + id + '_tooth_part_' + (parseInt(i, 10)+1 ) + '" value="' + (parseInt(i, 10)+1 ) + '" class="tooth_parts_' + id + '" style="margin-left: ' + margin_left + 'px" ' + (surface_selected==true?'checked':'') + '> <label for="' + kind + '_options_' + id + '_tooth_part_' + (parseInt(i, 10)+1 ) + '">' + tooth_parts[i] + '</label><br>';
//        }
    }

    return tooth_part_options;
}

function create_rct_part_options(where, kind, id, selected, tooth, procedure)
{
    if(typeof selected === 'undefined')
        var selected = new Array();

    if(typeof tooth === 'undefined')
        tooth = $(where + ' #tooth').val();
        
    if(typeof tooth === 'procedure')
        procedure = $(where + ' #procedure').val().toLowerCase();

    var rct_options = name_of_rct_part(tooth, procedure);

    if(rct_options.procedure_filled_in == true)
    {
        var tooth_part_options;
    
        if(rct_options.rct_parts.length > 0)
        {
            tooth_part_options = '<i>' + rct_options.rct_parts_title + '</i><br>'
                                + '<img src="' + base_url + 'assets/images/tooth/subject_arrow.gif">';

            for(var i in rct_options.rct_parts)
            {
                if(i == 0)
                    var margin_left = 3;
                else
                    var margin_left = 10;

                tooth_part_options += '<input type="checkbox" name="' + kind + '_options[' + id + '][rct_part][' + i + ']" value="' + i + '" class="rct_parts_' + id + '" style="margin-left: ' + margin_left + 'px" id="status_options_' + id + '_group_options_' + i + '" ' + (selected.indexOf(i)!=-1?'checked':'') + '> <label for="status_options_' + id + '_group_options_' + i + '">' + rct_options.rct_parts[i] + '</label><br>';
            }

            return tooth_part_options;
        }
        else
            return false
    }
    else
    {
        var i = 0;
        
        var tooth_part_options = '<i>Please select</i><br>'
                               + '<img src="' + base_url + 'assets/images/tooth/subject_arrow.gif">';

        $.each(rct_options.rct_parts, function(key, value)
        {
            if(i == 0)
            {
                var margin_left = 3;
                var margin_top  = 0;
            }
            else
            {
                var margin_left = 10;
                var margin_top  = 5;
            }

            tooth_part_options += '<span style="display: inline-block; margin-left: ' + margin_left + 'px; margin-top: ' + margin_top + 'px"><b>' + key + '</b></span><br>';

            if(i == 0)
                var margin_left = 10;

            var k = 0;

            for(var j in value)
            {
                tooth_part_options += '<input type="checkbox" name="' + kind + '_options[' + id + '][rct_part][' + k + ']" value="' + i + '_' + j + '" class="rct_parts_' + id + '" style="margin-left: ' + margin_left + 'px" id="status_options_' + id + '_group_options_' + i + '_' + j + '" ' + (selected.indexOf(i + '_' + j)!=-1?'checked':'') + '> <label for="status_options_' + id + '_group_options_' + i + '_' + j + '">' + value[j] + '</label><br>';

                k++;
            }

            i++;
        });
        
        return tooth_part_options;
    }
}

function create_icdas_options(kind, id, surface_no, visible, selected, cast_selected)
{
		console.log("create_icdas_options");
		console.log(kind);
		console.log(id);
		console.log(surface_no);
		console.log(visible);
		console.log(selected);
		console.log(cast_selected);


    if(typeof visible === 'visible')
        var visible = true;

    if(typeof selected === 'undefined')
        var selected = new Array();

    if(typeof cast_selected === 'undefined')
        var cast_selected = new Array();

    
    var icdas_options = '';

    $.each(config["icdas"]["levels"], function(key, value)
    {
        icdas_options += '<input type="radio" name="' + kind + '_options[' + id + '][icdas_options][' + (parseInt(surface_no, 10)+1 ) + ']" value="' + key + '" id="surface_' + surface_no + '_icdas_level_' + key + '" class="icdas" ' + (selected[surface_no]==key?'checked':'') + ' data-surface_no="' + surface_no + '"> <label for="surface_' + (parseInt(surface_no, 10)+1 ) + '_icdas_level_' + key + '"><div style="width: 10px; height: 10px; background-color: #' + value.color + '; display: inline-block;"></div> ' + key + ' ' + value.title + '</label><div style="float: right">' + display_help_hover(value.description) + '</div><br>';
    });
    
    
    var cast_options = '';

    $.each(config["cast"]["levels"], function(key, value)
    {
        cast_options += '<input type="radio" name="' + kind + '_options[' + id + '][cast_options][' + surface_no + ']" value="' + key + '" id="surface_' + surface_no + '_cast_level_' + key + '" class="cast" ' + (cast_selected[surface_no]==key?'checked':'') + ' data-surface_no="' + surface_no + '"> <label for="surface_' + surface_no + '_cast_level_' + key + '">' + key + ' ' + value.title + '</label><div style="float: right">' + display_help_hover(value.description) + '</div><br>';
    });

    /*
    var i;
    for(i=0; i<config["icdas"]["levels"].length; ++i)
    {
        icdas_options += '<input type="radio" name="' + kind + '_options[' + id + '][icdas_options][' + surface_no + ']" value="' + i + '" id="surface_' + surface_no + '_icdas_level_' + i + '" ' + (selected[surface_no]==i?'checked':'') + ' data-surface_no="' + surface_no + '"> <label for="surface_' + surface_no + '_icdas_level_' + i + '">' + i + ' ' + config["icdas"]["levels"][i].title + '</label><div style="float: right">' + display_help_hover(config["icdas"]["levels"][i].description) + '</div><br>';
    }
    */

    return '<div class="drag_drop_surface_selection_surface_options drag_drop_surface_selection_surface_' + surface_no + '" ' + (visible==false?'style="display:none;"':'') + '>'
            + '<div style="background-color: #EEEEEE; line-height: 24px; padding: 0px 5px; margin-bottom: 3px; font-weight: bold;">Select ICDAS caries index</div>'
            + icdas_options
            + '<br>'
            + '<div style="background-color: #EEEEEE; line-height: 24px; padding: 0px 5px; margin-bottom: 3px; font-weight: bold;">Select CAST caries index</div>'
            + cast_options
            /*
            + '<input type="radio" name="" value="" id="surface_' + surface_no + '_cast_level_3""> <label for="surface_' + surface_no + '_cast_level_3"> 3 Enamel</label><div style="float: right">' + display_help_hover('Description') + '</div><br>'
            + '<input type="radio" name="" value="" id="surface_' + surface_no + '_cast_level_4""> <label for="surface_' + surface_no + '_cast_level_4"> 4 Dentine discoloration</label><div style="float: right">' + display_help_hover('Description') + '</div><br>'
            + '<input type="radio" name="" value="" id="surface_' + surface_no + '_cast_level_5""> <label for="surface_' + surface_no + '_cast_level_5"> 5 Dentine cavitation</label><div style="float: right">' + display_help_hover('Description') + '</div><br>'
            + '<input type="radio" name="" value="" id="surface_' + surface_no + '_cast_level_6""> <label for="surface_' + surface_no + '_cast_level_6"> 6 Pulp</label><div style="float: right">' + display_help_hover('Description') + '</div><br>'
            */
            + '<br>'
            + '<input type="button" value="Continue" class="primary-button drag_drop_surface_selection_surface_options_continue" style="float: left">'
            + '<input type="button" value="Cancel" class="drag_drop_surface_selection_surface_options_cancel" style="float: right">'
        + '</div>';
}

function init_status_draggable(target_class_or_id, where_element)
{
    if(target_class_or_id)
        target_class_or_id = target_class_or_id;
    else
        target_class_or_id = '.status_draggable';

    if(where_element)
         where_element = where_element;
    else
         where_element = $('body');

    where_element.find(target_class_or_id).draggable({
        revert: 'invalid',
        revertDuration: 200,
//        containment: 'body'
        cursor: 'move',
        cursorAt: {top: -46, left: -46},
//        snap: '.scroll_head_div_horizontal_line',
        refreshPositions: false,
        appendTo: 'body',
        drag: function(event, ui)
        {
            $(this).parents('.expanded_statuses').hide();

            /*
            $('.customer_droppable_hover').prepend('<div id="scroll_temp_appointment_div" style="width: ' + appointment_duration + 'px; left: ' + (21 + (time_dropped * 20)) + 'px;" data-appointment_id="' + $(this). attr('data-appointment_id') + '">'
                                                        + '<div class="appointment_time" style="width: ' + appointment_duration + 'px;"></div>'
                                                    + '</div>');
            */
        },
        helper: function( event ) {
            return $('<div style="background-color: #FFFFFF; box-shadow: 1px 1px 3px #333333; padding-right: 5px; z-index: 10;">'
                        + '<div style="position: absolute; top: -36px; left: -36px;"><img src="' + base_url + 'assets/images/tooth/hand-swipe-point36.png" width="36" height="36"></div>'
                        + $(this).parent().html()
                    + '</div>');
        }
    });
}

function display_message(string, type)
{
    return '<div class="' + type + '_message">' + string + '</div>';
}

function display_help_hover(text, trigger)
{
    if(typeof trigger === 'undefined')
    {
        var trigger = '<img src="' + base_url + 'assets/images/tooth/info.png" style="width: 16px; height: 16px;" class="help-balloon-trigger-image">';
    }

    return '<div class="help-balloon-hover">'
            + '<div>'
                + trigger
            + '</div>'
            + '<div class="help-balloon-hover-text">'
                + '<img src="' + base_url + 'assets/images/tooth/info.png" style="width: 16px; height: 16px;">&nbsp;'
                + text
            + '</div>'
        + '</div>';
}

$(document).ready(function()
{
    //
    // Global functions
    //
    
    // List for change on input custom event WITH timeout
    $('.listen_for_change')
        .on('propertychange change click keyup input paste', function()
        {
            var this_var = $(this);

            // Needed if no value and focus for first time in field
            if(typeof this_var.data('oldVal') === 'undefined')
            {
                // Save current value of element
                this_var.data('oldVal', this_var.val());
            }

            // If value has changed...
            if(this_var.data('oldVal') != this_var.val())
            {
                // Updated stored value
                this_var.data('oldVal', this_var.val());

                clearTimeout(this_var.data('timer'));

                this_var.data('timer', setTimeout(function(){  this_var.trigger('custom_input_changed'); }, 250)); // Trigger event
            }
        })
        .on('focus', function()
        {
            // Set current value
            $(this).data('oldValue', $(this).val());

            // Init timer var
            $(this).data('timer');
        });

    // List for change on input custom event WITHOUT timeout
    $('.listen_for_change_instantly')
        .on('propertychange change click keyup input paste', function()
        {
            var this_var = $(this);

            // Needed if no value and focus for first time in field
            if(typeof this_var.data('oldVal') === 'undefined')
            {
                // Save current value of element
                this_var.data('oldVal', this_var.val());
            }

            // If value has changed...
            if(this_var.data('oldVal') != this_var.val())
            {
                // Updated stored value
                this_var.data('oldVal', this_var.val());

                this_var.trigger('custom_input_changed'); // Trigger event
            }
        })
        .on('focus', function()
        {
            // Set current value
            $(this).data('oldValue', $(this).val());
        });

    // Tab groups
    $('body')
        .on('click', '.tab_groups_container .tab_group_subtitle a', function(e)
        {
            e.preventDefault();

            var this_var = $(this);

            // Tabs
            this_var.parents('.tab_groups_container').find('.active').removeClass('active');
            // $('.tab_groups_container .active').removeClass('active');

            this_var.parents('.tab_group_subtitle').addClass('active');
            this_var.parents('.tab_group').addClass('active');

            // Content
            this_var.parents('.tab_groups_master_container').find('.tab_group_tab_content.active').removeClass('active');
            $(this_var.attr('href')).addClass('active'); //.show()

            location.hash = this_var.attr('href') + '-active';
        });
        
    // Check if a certain tab needs to be open
    if(location.hash.indexOf('-active') !== -1)
    {
        var active_tab_link = location.hash.replace('-active', '_link');

        if($(active_tab_link).length == 1)
            $(active_tab_link).trigger('click');
    }

      // For loading the 1st tab on default
//    $('.tab_group_container .tab_group_subtitle:first').addClass('active');
//    $('.tab_group_container .tab_group:first').addClass('active');
//    $('.tab_groups_master_container .tab_group_tab_content:first').addClass('active');

    // Expand collapse lists
    $('body')
        .on('click', '.expand_collapse_list .group_toggle', function()
        {
            /*
            if($(this).parents('.group').find('.group_to_toggle:visible'))
            {
                $(this).parents('.group').addClass('group_being_toggled');

                $(this).find('.group_toggle_icon .expand').hide();
                $(this).find('.group_toggle_icon .collapse').show();
            }

            // Collapse all others
            $(this).parents('.expand_collapse_list').find('.group:not(.group_being_toggled) .group_to_toggle').slideUp();

            $(this).parents('.expand_collapse_list').find('.group:not(.group_being_toggled) .group_toggle_icon .expand').show();
            $(this).parents('.expand_collapse_list').find('.group:not(.group_being_toggled) .group_toggle_icon .collapse').hide();
            // End collapse all others

            $(this).parents('.group').find('.group_to_toggle').slideToggle();

            $(this).parents('.group').removeClass('group_being_toggled');
            */
            
            var this_group = $(this).parents('.group');
        
            if(this_group.hasClass('group_expanded'))
            {
                this_group.removeClass('group_expanded').addClass('group_collapsed');
                
//                $(this).find('.group_toggle_icon .expand').hide();
//                $(this).find('.group_toggle_icon .collapse').show();
            }
            else
                this_group.removeClass('group_collapsed').addClass('group_expanded');
        
            this_group.find('.group_to_toggle').slideToggle();
        
            // Collapse all others
            $(this).parents('.expand_collapse_list').find('.group').not(this_group).removeClass('group_expanded').addClass('group_collapsed');
            $(this).parents('.expand_collapse_list').find('.group').not(this_group).find('.group_to_toggle').slideUp();
            // End collapse all others
        });
        
    // Exisiting / new items handler
    $('.input_existing_or_new_toggle')
        .on('change focus', 'select, input', function(event)
        {
            if($(this).hasClass('existing_or_new_toggle'))
            {
                if($(this).parents('.input_existing').length == 1)
                {
                    $(this).parents('.input_existing').find('input, select').prop('disabled', false);
                    $(this).parents('.input_existing_or_new_toggle').find('.input_new input:not(.existing_or_new_toggle), .input_new select').prop('disabled', true);
                }
                else
                {
                    $(this).parents('.input_new').find('input, select').prop('disabled', false);
                    $(this).parents('.input_existing_or_new_toggle').find('.input_existing input:not(.existing_or_new_toggle), .input_existing select').prop('disabled', true);
                }
            }
            else
            {
                if($(this).parents('.input_existing').length == 1)
                {
                    $(this).parents('.input_existing_or_new_toggle').find('.input_new input:not(.existing_or_new_toggle), .input_new select').prop('disabled', true);
                    $(this).parents('.input_existing').find('.existing_or_new_toggle').attr('checked', 'checked');
                }
                else
                {
                    $(this).parents('.input_existing_or_new_toggle').find('.input_existing input:not(.existing_or_new_toggle), .input_existing select').prop('disabled', true);
                    $(this).parents('.input_new').find('.existing_or_new_toggle').attr('checked', 'checked');
                }
            }
        });

    $('.input_existing_or_new_toggle .existing_or_new_toggle:checked').change();

    // Regions / provinces / chapters / cities / barangays
    /*******************/
    /* Chapters ajax
    /*******************/
    $('body')
    .on('change', '.dropdown select', function(event)
    {
        var this_dropdown_group = $(this).parents('.dropdown').attr('data-target_class');
        var this_dropdown_group_length = $('.' + this_dropdown_group).length;

        var this_dropdown_index = $('.' + this_dropdown_group).index($(this).parent());
        var this_dropdown = $(this);

//        alert('This_index: ' + this_dropdown_index);


        if(this_dropdown_group_length > 1)
        {
            var dropdowns_before = $('.' + this_dropdown_group).slice(0, this_dropdown_index);
            var dropdowns_after  = $('.' + this_dropdown_group).slice(this_dropdown_index + 1);

//            alert('Before: ' + dropdowns_before.length);
//            alert('After: ' + dropdowns_after.length);

            var dropdowns_before_are_filled_in = true;

            if(dropdowns_before.length > 0)
            {
                dropdowns_before.each(function(index, value)
                {
                    if(dropdowns_before.eq(index).find('select').val() == '')
                        dropdowns_before_are_filled_in = false;
                });
            }

//            alert(dropdowns_before_are_filled_in);

            if(dropdowns_before_are_filled_in == true)
            {
                if(dropdowns_after.length > 0)
                {
                    var data_to_send_array = new Array()
                        ,data_to_send = '&from=' + $(this).parent().attr('data-type') + '&value=' + $(this).val();
                                                                                                             //  + '&prefix=' + $(this).attr('name').replace('[]', '').replace($(this).parent().attr('data-type'), '')
                    /*
                    if(dropdowns_before.length > 0)
                    {
                        dropdowns_before.each(function(index, value)
                        {
                            data_to_send_array.push(dropdowns_before.eq(index).attr('data-type') + '=' + dropdowns_before.eq(index).find('select').val()); // Alle data van de vorige filters in een array zetten
                        });

                        data_to_send += '&' + data_to_send_array.join('&');
                    }
                    */

//                    alert(data_to_send);
//                    alert(dropdowns_after.eq(0).attr('data-type'));

                    dropdowns_after.each(function(index, value)
                    {
//                        filters_after[i] is de naam van de filter in deze loop

                        if(index == 0 && $('.' + this_dropdown_group).eq(this_dropdown_index).find('select').val() != '')
                        {
                            $(dropdowns_after.eq(index)).html('<img src="' + base_url + '/images/loading.gif" class="loading_image" style="width: 16px; height: 16px">');

                            $.ajax({
                                type: "GET",
                                url: base_url + "/js/ajax/load_dropdown.php",                                                                                                                                             //  + $('.' + this_dropdown_group + '[data-type="' + dropdowns_after.eq(index).attr('data-type') + '"]').index($(this).parent())
                                data: 'target=' + this_dropdown_group + '&type=' + dropdowns_after.eq(index).attr('data-type') + '&name=' + dropdowns_after.eq(index).attr('data-field_name') + data_to_send + '&index=' + $('.' + this_dropdown_group + '[data-type="' + dropdowns_after.eq(index).attr('data-type') + '"]').index(this_dropdown.parent()),
                                cache: false,
                                success: function(msg)
                                {
//                                    alert(msg);

                                    var msg_json,
                                        error = false;

                                    try
                                    {
                                        msg_json = $.parseJSON(msg);
                                    }

                                    catch(e)
                                    {
                                        error = true;
                                    }

                                    if(error == false && msg_json.code == 'success')
                                    {
                                        if($('.' + msg_json.target + '[data-type="' + msg_json.type + '"]').eq(parseInt(msg_json.index) + 1).length > 0)
                                            $('.' + msg_json.target + '[data-type="' + msg_json.type + '"]').eq(parseInt(msg_json.index) + 1).html(msg_json.message);
                                        else
                                            $('.' + msg_json.target + '[data-type="' + msg_json.type + '"]').html(msg_json.message);
                                    }

                                    else
                                    {
//                                        $('.' + msg_json.target).html('<b>Something went wrong, please try again.</b><input type="hidden" name="' + msg_json.target + '" value="">');
                                        // Hier moet dus nog wat komen...
                                    }
                                }
                            });
                        }
                        else
                        {
                            // De filters die niet direct na de gewijzigde komen moeten een melding krijgen dat eerst een parent option geselecteerd moet worden
                            $(dropdowns_after.eq(index)).html('<i>Please select a parent option first</i>');
                        }
                    });
                }
            }
        }
    });


    /*******************/
    /* Chapters ajax
    /*******************/
    $('body')
    .on('change', '.filter_container .filter', function(event)
    {
        var filters = new Array('region_id'
                                ,'province_id'
                                ,'chapter_id'
                                ,'city_id'
                                ,'barangay_id');

        var this_filter_name = $(this).attr('name');

        var this_filter_index = $.inArray(this_filter_name, filters);

        var filters_before = filters.splice(0, this_filter_index);

        if($(this).val() == '')
            var filters_after  = filters.splice(0);
        else
            var filters_after  = filters.splice(1);
        // als de waarde leeg is, moet de dropdown zelf ook vernieuwd worden


        var filters_before_are_filled_in = true;

        if(filters_before.length > 0)
        {
            for(i in filters_before)
            {
                if($(this).parents('.filter_container').find('.' + filters_before[i] + ' .filter').val() == '')
                    filters_before_are_filled_in = false;
            }
        }

//        if(filters_before_are_filled_in == false)
//        {
            var data_to_send_array = new Array()
                ,data_to_send = '&' + this_filter_name + '=' + $(this).val();

            for(i in filters_before)
            {
//                filters_before[i] is de naam van de filter in deze loop

                $('.' + filters_before[i]).html('<img src="' + base_url + 'assets/images/tooth/loading.gif" class="loading_image" style="width: 16px; height: 16px">');

                $.ajax({
                    type: "GET",
                    url: base_url + "/js/ajax/load_filter.php",
                    data: 'type=' + filters_before[i] + data_to_send,
                    cache: false,
                    success: function(msg)
                    {
//                        alert(msg);

                        var msg_json,
                            error = false;

                        try
                        {
                            msg_json = $.parseJSON(msg);
                        }

                        catch(e)
                        {
                            error = true;
                        }

                        if(error == false && msg_json.code == 'success')
                        {
                            $('.' + msg_json.target).html(msg_json.message);
                        }

                        else
                        {
//                            $('.' + msg_json.target).html('<b>Something went wrong, please try again.</b><input type="hidden" name="' + msg_json.target + '" value="">');
                            // Hier moet dus nog wat komen...
                        }
                    }
                });
            }
//        }


        // Alle filters ingevuld, dus ajax aanroepen als er filters na deze komen
        if(filters_after.length > 0)
        {
            var data_to_send_array = new Array()
                ,data_to_send = '&' + this_filter_name + '=' + $(this).val();

            if(filters_before.length > 0)
            {
                for(i in filters_before)
                {
                    data_to_send_array.push(filters_before[i] + '=' + $(this).parents('.filter_container').find('.' + filters_before[i] + ' .filter').val()); // Alle data van de vorige filters in een array zetten
                }

                data_to_send += '&' + data_to_send_array.join('&');
            }

            for(i in filters_after)
            {
//                filters_after[i] is de naam van de filter in deze loop

                $('.' + filters_after[i]).html('<img src="' + base_url + 'assets/images/tooth/loading.gif" class="loading_image" style="width: 16px; height: 16px">');

                $.ajax({
                    type: "GET",
                    url: base_url + "/js/ajax/load_filter.php",
                    data: 'type=' + filters_after[i] + data_to_send,
                    cache: false,
                    success: function(msg)
                    {
//                        alert(msg);

                        var msg_json,
                            error = false;

                        try
                        {
                            msg_json = $.parseJSON(msg);
                        }

                        catch(e)
                        {
                            error = true;
                        }

                        if(error == false && msg_json.code == 'success')
                        {
                            $('.' + msg_json.target).html(msg_json.message);
                        }

                        else
                        {
//                            $('.' + msg_json.target).html('<b>Something went wrong, please try again.</b><input type="hidden" name="' + msg_json.target + '" value="">');
                            // Hier moet dus nog wat komen...
                        }
                    }
                });
            }
        }


        if($('.no_of_results').length > 0)
        {
            var data_to_send = '&' + this_filter_name + '=' + $(this).val();

            $('.no_of_results').html('<img src="' + base_url + 'assets/images/tooth/loading.gif" class="loading_image" style="width: 14px; height: 14px">');

            $.ajax({
                type: "GET",
                url: base_url + "/js/ajax/load_filter.php",
                data: 'type=' + this_filter_name + '&action=get_no_of_results' + data_to_send,
                cache: false,
                success: function(msg)
                {
//                    alert(msg);

                    var msg_json,
                        error = false;

                    try
                    {
                        msg_json = $.parseJSON(msg);
                    }

                    catch(e)
                    {
                        error = true;
                    }

                    if(error == false && msg_json.code == 'success')
                    {
                        $('.no_of_results').html(msg_json.message);
                    }

                    else
                    {
//                        $('.no_of_results').html('<b>Something went wrong, please try again.</b>');
                        // Hier moet dus nog wat komen...
                    }
                }
            });
        }
    });

    //
    //
    // Specific funtions
    //
    //
    
    //
    // Mobile menu
    //
    
    $('.mobile-menu-trigger').click(function()
    {
        $('.mobile-menu').toggle('fast');
    });

    //
    // Patients
    //
    
    // Patients filter
    $('.page_main_filter')
        .on('custom_input_changed', '.patients_search_value', function(e)
        {
            var this_var = $(this);

            $('#patients_table tbody').empty();

            $('#patients_table tbody').append('<tr><td class="table_content" colspan="15" style="padding: 25px; text-align: center;"><img src="' + base_url + '/images/loading.gif"></td></tr>')

            $.ajax({
                type: "GET",
                url: base_url + '/dental-treatment/patients/read_ajax.php',
                data: 'search_query=' + this_var.val(),
                cache: false,
                success: function(msg)
                {
//                    alert(msg);

                    var msg_json,
                        error = false;

                    try
                    {
                        msg_json = $.parseJSON(msg);
                    }

                    catch(e)
                    {
                        error = true;
                    }

//                    this_var.parent().find('.loading').remove();

                    if(error == false)
                    {
                        if(msg_json.code == 'success')
                        {
                            $('#patients_table tbody').empty().append(msg_json.items);
                            
                            $('.no_of_patients_found').text(msg_json.total_records_text);
                            
                            $('.patients_pagination').empty().append(msg_json.pagination);
                            
                            if(msg_json.no_of_pages > 1)
                                $('.patients_pagination').show();
                            else
                                $('.patients_pagination').hide();
                        }

                        else if(msg_json.code == 'cancel')
                        {
                            alert(msg_json.message);
                        }

                        else if(msg_json.code == 'error')
                        {
                            alert(msg_json.message);
                        }

                        else
                        {
                            alert(msg_json.message);
                        }
                    }

                    else
                        alert('Error, please try again.');
                }
            });
        });
        
    // Show all patients
    $('.page_main_filter').on('click', '.show_all_patients', function()
        {
            $('.patients_search_value').val('').parents('form').submit();
        });
        
    // Patients overview click on record
    $('#patients_table tbody').on('click', 'tr', function()
        {
            window.location = base_url + '/dental-treatment/patients/view-record/' + $(this).data('patient_id') + '/';
        });

    // Drag and drop statuses
    // Drag single status
    init_status_draggable('.status_draggable');

    // Expand status list
    $('body').on('click', '.status_expand_left, .load_all_statuses', function(e)
        {
            e.preventDefault();

            $(this).parent().find('.expanded_statuses').fadeIn(400);

            if(($('#last_progress_chart').height() - 23) > 375)
                $('.expanded_statuses, .expanded_statuses_content').height($('#last_progress_chart').height() - 23 + 'px');

            /*
            Dit stuk is commentaar, omdat het niet lekker werkte met draggen als je in het wild ging klikken en selecteren van tekst
            $(document).mouseup(function(e)
            {
                var container = $('.expanded_statuses');

                if (!container.is(e.target) // if the target of the click isn't the container...
                    && container.has(e.target).length === 0) // ... nor a descendant of the container
                {
                    container.fadeOut(400);

                    $(document).unbind( 'mouseup' );

//                    console.log('test');
                }
            });
            */
        });
        $('body').on('click', '.expanded_statuses_close', function(e)
        {
            $('.expanded_statuses').fadeOut(400);
        });

    $('body').on('submit', '.drag_drop_surface_selection form', function(e)
        {
            e.preventDefault();
            
            if($(this).parents('table').hasClass('baseline_chart'))
                var where = '#baseline_dental_record';
            else if($(this).parents('table').hasClass('work_proposed_chart'))
                var where = '#work_proposed_record';
            else
                var where = '#dental_progress_record';
            
            
            var action;
            
            // Get form action, save or continue
            if($(this).find('.drag_drop_surface_selection_action').val() == '')
            {
                if(where == '#baseline_dental_record')
                    action = 'save';
                else
                    action = 'continue';
            }
            else
            {
                if($(this).find('.drag_drop_surface_selection_action').val() == 'save')
                    action = 'save';
                else
                    action = 'continue';
            }
            
            
            // moet hier nog ergens checken of er wel wat is aangevinkt.. of doen we gewoon leeg is alles aangevinkt?

            var status_group = $(this).parents('.drag_drop_surface_selection').attr('data-status_group');
            var status_type = $(this).parents('.drag_drop_surface_selection').attr('data-status_type');

            /* was used to display the value of a checked checkbox as the status text in the record
            if($(this).find('.status_group_options:checked').length > 0)
            {
                var status_name = $(this).find('.status_group_options:checked').val();
                var status_id = $(this).find('.status_group_options:checked').attr('data-status_id');
            }
            */

            var status_name = $(this).parents('.drag_drop_surface_selection').attr('data-status_name');
            var status_id = $(this).parents('.drag_drop_surface_selection').attr('data-status_id');

            if(status_group == 'Endo')
            {
                var selected_options = $(this).find("input.tooth_parts_0[type=checkbox]:checked").map(function()
                {
                    return $(this).val();
                }).get().join();
            }
            else if(status_type == 'ICDAS')
            {
                var selected_options = [];

                // Get selected options/surfaces
                selected_options['tooth_part'] = $(this).find("input.tooth_parts_0[type=checkbox]:checked").map(function()
                {
                    return $(this).val() - 1;
                }).get().join();
            
                selected_options['icdas_options'] = [];

                $(this).find('.drag_drop_surface_selection_surface_options input.icdas:checked').each(function(key, value)
                {
                    selected_options['icdas_options'][$(this).data('surface_no')] = $(this).val();
                });

                selected_options['cast_options'] = [];

                $(this).find('.drag_drop_surface_selection_surface_options input.cast:checked').each(function(key, value)
                {
                    selected_options['cast_options'][$(this).data('surface_no')] = $(this).val();
                });
            }
            else
            {
                var selected_options = [];
            
                // Get selected options/surfaces
                selected_options['tooth_part'] = $(this).find("input.tooth_parts_0[type=checkbox]:checked").map(function()
                {
                    return $(this).val() - 1;
                }).get().join();
            }


            if(action == 'save')
            {
                $(where + ' .loading').show();

                var post_data = new Array();
                post_data['chart_id'] = $(this).parents('.dental_chart_table').attr('data-chart_id');
                post_data['chart_type'] = $(this).parents('.dental_chart_table').attr('data-chart_type');

                $.ajax({
                    type: "POST",
                    url: base_url + "/dental-treatment/patients/baseline-dental-record-actions.php",
                    data: "action=quick_add&" + $(this).serialize() + '&chart_id=' + post_data['chart_id'] + '&chart_type=' + post_data['chart_type'] + '&dentist=' + member['initials'] + '&patient_id=' + url_vars['id'] + '&status[]=' + status_name + '&status_id[]=' + status_id + '&tooth=' + $(this).parents('td').attr('data-tooth_nr'),
                    cache: false,
                    success: function(msg)
                    {
//                        alert(msg);

                        if(msg == 'error')
                        {
                            $(where + ' .loading').hide();

                            alert('error');
                        }

                        else
                        {
                            $.ajax({
                                type: "POST",
                                data: 'type=baseline&chart_id=' + post_data['chart_id'],
                                url: base_url + '/dental-treatment/patients/rebuild-single-chart.php',
                                cache: false,
                                async: false,
                                success: function(msg)
                                {
//                                    $('#baseline_chart_' + post_data['chart_id']).html(msg);
                                    $('#baseline_tab').find('.select_charts form').submit();
                                    
                                    // Refresh chart selection of other area's
                                    if($('#work_proposed_tab .select_charts form').length > 0)
                                    {
                                        $('#work_proposed_tab .select_charts form').submit();
                                    }

                                    if($('#work_done_tab .select_charts form').length > 0)
                                    {
                                        $('#work_done_tab .select_charts form').submit();
                                    }
                                }
                            });

                            $('#baseline_dental_record tbody').prepend(msg);
                            $(where + ' .loading').hide();

                            $('#baseline_dental_record .newline, #baseline_dental_record .new_row').remove();

                            ajax_load_form(null, {form_id     : 'edit-profile-picture',
                                                  action      : 'read',
                                                  patient_id  : url_vars['id'],
                                                  form_target : 'overview_tab'});

                            ajax_load_form(null, {form_id       : 'edit-document',
                                                    action      : 'read',
                                                    patient_id  : url_vars['id'],
                                                    form_target : 'documents_tab tbody'});
                        }
                    }
                });
            }
            else
            {
                // Load status options
                if(status_group == 'Endo')
                    var tooth_part_options = create_rct_part_options(where, 'status', 0, selected_options, $(this).parents('td').attr('data-tooth_nr'));
                else
                    var tooth_part_options = create_tooth_part_options(where, 'status', 0, selected_options, $(this).parents('td').attr('data-tooth_nr'), status_type);

                // Trigger default click on tooth action
                $(this).parents('td').click();

                // Fill in the status in the status field
                $(where).find('.status_td textarea').val(status_name);
                $(where).find('.status_td #status_id_0').val(status_id);

                $(where + ' #status_0').next('div').hide(400);
                $(where + ' #status_0').next('div').remove();                                                                                                // data-status_group="' + status_group + '" data-status_name="" data-status_id=""
                $(where + ' #status_0').after('<div style="display: none; margin-bottom: 10px" class="surface_selection" data-status_type="' + status_type + '">' + tooth_part_options + '</div>');
                $(where + ' #status_0').next().show(400);

                $(this).parents('.dental_chart_table').find('.tooth_hover').remove();
                $(this).parents('.drag_drop_surface_selection').remove();
			setTimeout(	
		$('body').on('change', 'input[type="checkbox"]', function(e){if($(this).is( ":checked" )){$(this).attr('checked', false);}else{$(this).attr('checked', true );}
		})
		, 1000);
            }

        });
        
    $('body').on('click', '.drag_drop_surface_selection input[type="submit"]', function(e)
        {
            $(this).parents('.drag_drop_surface_selection').find('.drag_drop_surface_selection_action').val($(this).attr('data-action')); //$(this).val()
        });
        $('body').on('change', '.drag_drop_surface_selection input[type="checkbox"], .surface_selection input[type="checkbox"]', function(e)
        {
            var $this_var = $(this);
        
            if($this_var.closest('.surface_selection').data('status_type') == 'ICDAS')
            {
				
                if($this_var.attr('checked') == 'checked')
                {
                    $this_var.parents('.surface_selection').find('.drag_drop_surface_selection_surface_options:visible').remove();
                    
                    if(!$this_var.parents('.surface_selection').hasClass('drag_drop_surface_selection'))
                        var status_no = $this_var.closest('td').find('textarea').attr('id').replace('status_', '');
                    else
                        var status_no = 0;
                   
                    $this_var.before(create_icdas_options('status', status_no, ($this_var.val() - 1)));
                }
                else
                    $this_var.parents('.surface_selection').find('.drag_drop_surface_selection_surface_' + ($this_var.val() - 1)).remove();
            }
        });
        /*
        .on('change', '.drag_drop_surface_selection_surface_options input[type="radio"]', function(e)
        {
            $(this).closest('.drag_drop_surface_selection_surface_options').hide(400);
        })
        */
        $('body').on('click', '.drag_drop_surface_selection_surface_options .drag_drop_surface_selection_surface_options_continue', function(e)
        {
            $(this).closest('.drag_drop_surface_selection_surface_options').hide(400);
        });
        $('body').on('click', '.drag_drop_surface_selection_surface_options .drag_drop_surface_selection_surface_options_cancel', function(e)
        {
            $(this).closest('.drag_drop_surface_selection_surface_options').find('input[type="radio"]').attr('checked', false);
            $(this).closest('.drag_drop_surface_selection_surface_options').hide(400);
        });
        $('body').on('click', '.drag_drop_surface_selection_cancel', function(e)
        {
            $(this).parents('td').find('.tooth_hover').remove();
            $(this).parents('.drag_drop_surface_selection').remove();
        });
        
    // is dubbele functie, staat ook al ergens in de index.. moet daar weg denk ik
    // is dubbele functie, staat ook al ergens in de index.. moet daar weg denk ik
    // is dubbele functie, staat ook al ergens in de index.. moet daar weg denk ik
    $('body').on('change', '.drag_drop_surface_selection .select_all', function(e)
        {
            if($(this).is(':checked'))
            {
                $('.' + $(this).attr('data-target')).slice(0, 5).attr('checked', 'checked');
            }
            else
            {
                $('.' + $(this).attr('data-target')).slice(0, 5).attr('checked', '');
            }
        });
        
        
    //
    // Finance
    //
    
    // Go to billing statement
    $('body').on('click', '.go_to_billing_statement', function(e)
        {
            if($(this).closest('table').attr('id') == 'unquoted_records')
                var processed_tab = '#quoted_tab';
            else
                var processed_tab = '#billing_statements_tab';
        
            // Tabs
            $('.tab_groups_container .active').removeClass('active');

            $(processed_tab + '_link').parents('.tab_group_subtitle').addClass('active');
            $(processed_tab + '_link').parents('.tab_group').addClass('active');

            // Content
            $('.tab_group_tab_content.active').removeClass('active'); //.hide()
            $(processed_tab).addClass('active'); //.show()
            
            goToObjectByScroll($('.billing_statement.invoice_' + $(this).data('billing_statement_id')), -50);
        });
        
    // Delete quotation
    $('#quoted_records').on('click', '.delete_quotation', function(e)
        {
            e.preventDefault();

            var this_var = $(this);

            $('.delete_quotation_div').remove();

            this_var.before('<div class="loading" style="position: absolute; margin: 8px 0 0 80px"><img src="' + base_url + '/images/loading.gif" style="width: 21px; height: 21px;"></div>');

            $.ajax({
                type: "GET",
                url: base_url + '/dental-treatment/patients/delete-quotation.php',
                data: 'id=' + this_var.data('id'),
                cache: false,
                success: function(msg)
                {
//                    alert(msg);

                    var msg_json,
                        error = false;

                    try
                    {
                        msg_json = $.parseJSON(msg);
                    }

                    catch(e)
                    {
                        error = true;
                    }

                    this_var.parent().find('.loading').remove();

                    if(error == false)
                    {
                        if(msg_json.code == 'success')
                        {
                            this_var.after(msg_json.message);
                        }

                        else if(msg_json.code == 'cancel')
                        {
                            alert(msg_json.message);
                        }

                        else if(msg_json.code == 'error')
                        {
                            alert(msg_json.message);
                        }

                        else
                        {
                            alert(msg_json.message);
                        }
                    }

                    else
                        alert('Error, please try again.');
                }
            });
        })
        .on('submit', '.delete_quotation_form', function(e)
        {
            e.preventDefault();

            var this_var = $(this);

            this_var.append('<div class="loading"><img src="' + base_url + '/images/loading.gif" style="width: 21px; height: 21px;"></div>');

            $.ajax({
                type: "POST",
                url: base_url + '/dental-treatment/patients/delete-quotation.php',
                data: $('.delete_quotation_form').serialize(),
                cache: false,
                success: function(msg)
                {
//                    alert(msg);

                    var msg_json,
                        error = false;

                    try
                    {
                        msg_json = $.parseJSON(msg);
                    }

                    catch(e)
                    {
                        error = true;
                    }

                    this_var.parent().find('.loading').remove();

                    if(error == false)
                    {
                        if(msg_json.code == 'success')
                        {
                            // Recalculate total charges
                            var total_charges_old       = Number($('#quoted_records .total_charges').text().replace(/,/g, '').replace(/ /g, ''));
                            var this_invoice_charges    = Number($('#quoted_records .invoice_' + msg_json.invoice_id + ' .invoice_total_charges').text().replace(/,/g, '').replace(/ /g, ''));

//                            console.log(total_charges_old);
//                            console.log(this_invoice_charges);

                            // Remove quotation records
                            $('#quoted_records .invoice_' + msg_json.invoice_id + '.billing_statement').prev('.invoice_divider').hide(1000, function(){
                                $(this).remove();
                            });

                            $('#quoted_records .invoice_' + msg_json.invoice_id).hide(1000, function(){
                                $(this).remove();
                                                                                                            
                                // When there are no quotations left, show a message
//                                console.log($('#quoted_records tbody tr.billing_statement').length);

                                if($('#quoted_records tbody tr.billing_statement').length == 0)
                                {
                                    $('#quoted_records .all_invoices_total').remove();

                                    if($('#quoted_records .info_message').length == 0)
                                    {
                                        $('#quoted_records tbody').append('<tr>'
                                                                                        + '<td colspan="8">' + display_message('There are no quotations generated for this patient yet.', 'info') + '<br></td>'
                                                                                    + '</tr>');
                                    }
                                }
                                else
                                {
                                    $('#quoted_records .total_charges').text(number_format(total_charges_old - this_invoice_charges, 2, '.', ','));
                                }
                            });

                            // Insert unbilled records
                            if(typeof msg_json.uninvoiced_records !== 'undefined')
                            {
                                $('#unquoted_records>tbody').prepend(msg_json.uninvoiced_records);
                                $('#unquoted_records>tbody').find('.info_message').parent().parent().remove();

                                /* checken of dit echt weg kan..
                                $.each(msg_json.progress_records, function(index, value)
                                {
                                    $('#invoices #uninvoiced_record_id_' + value + ' td').css('background-color', '').css('border-color', '').dequeue();
                                    highlight_animation($('#invoices #uninvoiced_record_id_' + value + ' td'), 10000);
                                });
                                */
                                
                                /* Update number of unbilled records in the tab */
                                var curren_no_of_unbilled_records = new Big($('.no_of_unquoted_records').text());

                                var new_no_of_unbilled_records = curren_no_of_unbilled_records.plus(1);
                                new_no_of_unbilled_records = new_no_of_unbilled_records.toFixed(0);

                                $('.no_of_unquoted_records').text(new_no_of_unbilled_records);
                            }


                            // Enable progress record lines
                            $('#work_proposed_record tr.already_invoiced').each(function(index, value)
                            {
                                if($.inArray($(this).data('record_id'), msg_json.progress_records) != -1)
                                {
                                    $(this).removeClass('already_invoiced');
                                    $(this).children(":first").css('background', '').css('backgroundColor', '#FFFFFF');
                                }
                            });

//                            goToByScroll('invoices');

//                            $.zoombox.html(display_greta('The credit note has been generated and the original billing statement(s) has/have been placed back under <b>"Unbilled records"</b>'), $.extend(true, {}, zoombox_options, {theme: 'infobox', width: '400', height: '115'}));
//                            $.zoombox.html('The bill has been credited and all the uninvoiced records have been put back in place', zoombox_options);
//                            alert('The bill has been credited and all the uninvoiced records have been put back in place');
                        }

                        else if(msg_json.code == 'cancel')
                        {
                            alert(msg_json.message);
                        }

                        else if(msg_json.code == 'error')
                        {
                            alert(msg_json.message);
                        }

                        else
                        {
                            alert(msg_json.message);
                        }
                    }

                    else
                        alert('Error, please try again.');
                }
            });
        })
        .on('click', '.delete_quotation_form_cancel', function(e)
        {
            $('.delete_quotation_div').remove();
        });
        
    // Mark parts of quotation
    function show_selected_invoiced_records_menu(where)
    {
        var parent_div_id = '#' + where.parents('.tab_group_tab_content').attr('id');

        where.before('<div class="processed_records_menu" style="position: absolute; left: 130px; width: auto; background-color: #d3f7ff; border: 2px dashed #0289BC; text-align: center; padding: 12px 5px 12px 5px; z-index: 101;">'
                        + '<form class="processed_records_menu_form">'
                            + '<input type="hidden" name="full_record_id" value="' + where.data('full_record_id') + '" class="full_record_id">'
                            + '<span class="num_records_selected">' + $(parent_div_id + ' .check_for_done:checked').length + '</span> record(s) selected<br>'
                            + '<br>'
                            + 'What would you like to do?<br><br>'
                            + '<input type="button" name="mark_as_done" value="Copy to work done" class="submit primary-button" style="width: 140px; text-align: center;" data-new_status="done"><br><br>'
                            + '<input type="button" name="mark_as_cancelled" value="Mark as cancelled" class="submit" style="width: 140px; text-align: center;" data-new_status="cancelled">'
                            + '<div class="loading" style="display: none;"><img src="' + base_url + '/images/loading.gif" style="margin-bottom: -10px"> Loading...</div>'
                        + '</form>'
                    + '</div>');

        where.prev().css('margin-top', '-' + ((where.prev().height() + 30) / 2) - 7 + 'px');
    }
        
    $('#quoted_records')
        .on('change', '.check_for_done', function()
        {
            var where       = '#' + $(this).parents('.tab_group_tab_content').attr('id'),
                record_id   = $(this).data('full_record_id'),
                part_no     = $(this).data('part_no');

            if($(this).attr('checked') == 'checked')
            {
                $(where + ' .' + record_id + ':not(.invoice_divider_blank) .part_' + part_no).css('background-color', '#d3f7ff');
                // border-top: 1px solid #e2e2e2; border-bottom: 1px solid #e2e2e2; toevoegen aan de geselecteerde records???
                // Bij de dentist ook een border-left: 1px solid #e2e2e2

                $(where + ' .num_records_selected').text($(where + ' .check_for_done:checked').length);

                show_selected_invoiced_records_menu($(this));

                $(where + ' .check_for_done:checked').not($(this)).prev().remove();
            }

            else
            {
                $(where + ' .' + record_id + ':not(.invoice_divider_blank) .part_' + part_no).css('background-color', '');

                if($(this).prev().length == 1)
                {
                    $(this).prev().remove();

                    show_selected_invoiced_records_menu($(where + ' .check_for_done:checked').first());
                }
                else
                {
                    var item_with_menu = $(where + ' .processed_records_menu').next();

                    $(where + ' .processed_records_menu').remove();

                    show_selected_invoiced_records_menu(item_with_menu);
                }

                $(where + ' .num_records_selected').text($(where + ' .check_for_done:checked').length);
            }
        })
        .on('click', '.processed_records_menu .submit', function(e)
        {
            var where       = '#' + $(this).parents('.tab_group_tab_content').attr('id'),
                this_var    = $(this),
                record_id   = $(this).closest('form').find('.full_record_id').val().replace(/\./g, '\\.').replace(/ /g, '');

            var $where_obj  = $(where);

            $(this).parent().find('.loading').show();

            $.ajax({
                type: "POST",
                url: base_url + '/dental-treatment/patients/quotation-actions.php',
                data: 'action=change_status&new_status=' + this_var.data('new_status') + '&' + $where_obj.find('.' + record_id + ' .check_for_done').serialize() + '&' + this_var.closest('form').serialize(),
                cache: false,
                success: function(msg)
                {
//                    alert(msg);

                    var msg_json,
                        error = false;

                    try
                    {
                        msg_json = $.parseJSON(msg);
                    }

                    catch(e)
                    {
                        error = true;
                    }

                    this_var.parent().find('.loading').remove();

                    if(error == false)
                    {
//                        console.log(msg_json);
                    
                        if(msg_json.code == 'success')
                        {
                            $('#quoted_tab').find('.' + record_id + ' .processed_records_menu').remove();
                        
                            $.each(msg_json.edited_parts, function(index, value)
                            {
                                $('#quoted_tab').find('.' + record_id + ' .part_' + value).first().removeClass('record_is_done').removeClass('record_is_cancelled').addClass('record_is_' + this_var.data('new_status'));
                                $('#quoted_tab').find('.' + record_id + ' .part_' + value).css('backgroundColor', '');
                                $('#quoted_tab').find('.' + record_id + ' .part_' + value + ' :checkbox').prop('checked', false);
                            });
                            
                            if(msg_json.new_status == 'done')
                            {
                                $.each(msg_json.progress_records, function(index, value)
                                {
                                    $('#dental_progress_record > tbody').prepend(value);
                                });
                                
                                if($('#work_done_tab .select_charts form').length > 0)
                                {
                                    $('#work_done_tab .select_charts form').submit();
                                }

                                $.each(msg_json.uninvoiced_records, function(index, value)
                                {
                                    $('#uninvoiced_records > tbody').find('.info_message').parent().parent().remove();

                                    $('#uninvoiced_records > tbody').prepend(value);
                                });

                                // Update number of unbilled records
                                var curren_no_of_unbilled_records = new Big($('.no_of_unbilled_records').text());

                                var new_no_of_unbilled_records = curren_no_of_unbilled_records.plus(1);
                                new_no_of_unbilled_records = new_no_of_unbilled_records.toFixed(0);

                                $('.no_of_unbilled_records').text(new_no_of_unbilled_records);

                                if(new_no_of_unbilled_records > 0 && !$('.no_of_unbilled_records_container').hasClass('no_of_unbilled_records_alert'))
                                    $('.no_of_unbilled_records_container').addClass('no_of_unbilled_records_alert');

                                // Submit work done chart selection form
                                $('#work_done_tab .select_charts form').submit(); // Moet $ zijn, ander wordt de jquery function op het form niet getriggered!
                            }
                        }

                        else if(msg_json.code == 'cancel')
                        {
                            alert(msg_json.message);
                        }

                        else if(msg_json.code == 'error')
                        {
                            alert(msg_json.message);
                        }
                        
                        else if(msg_json.code == 'no_progress_chart_exists')
                        {
                            alert('There is no chart yet under the tab "Edit work done", so the quotations cannot not be copied .\nPlease add a chart under the tab "Edit work done" first.');
                        }

                        else
                        {
                            alert(msg_json.message);
                        }
                    }

                    else
                        alert('Error, please try again.');
                }
            });
        });

    // Make credit note
    $('#invoices')
        .on('click', '.create_credit_note', function(e)
        {
            e.preventDefault();

            var this_var = $(this);
            
            $('.create_credit_note_div').remove();

            this_var.before('<div class="loading" style="position: absolute; margin: 8px 0 0 80px"><img src="' + base_url + '/images/loading.gif" style="width: 21px; height: 21px;"></div>');

            $.ajax({
                type: "GET",
                url: base_url + '/dental-treatment/patients/make-credit-note.php',
                data: 'id=' + this_var.data('id'),
                cache: false,
                success: function(msg)
                {
//                    alert(msg);

                    var msg_json,
                        error = false;

                    try
                    {
                        msg_json = $.parseJSON(msg);
                    }

                    catch(e)
                    {
                        error = true;
                    }

                    this_var.parent().find('.loading').remove();

                    if(error == false)
                    {
                        if(msg_json.code == 'success')
                        {
                            this_var.after(msg_json.message);
                        }

                        else if(msg_json.code == 'cancel')
                        {
                            alert(msg_json.message);
                        }

                        else if(msg_json.code == 'error')
                        {
                            alert(msg_json.message);
                        }

                        else
                        {
                            alert(msg_json.message);
                        }
                    }

                    else
                        alert('Error, please try again.');
                }
            });
        })
        .on('submit', '.create_credit_note_form', function(e)
        {
            e.preventDefault();

            var this_var = $(this);

            this_var.append('<div class="loading"><img src="' + base_url + '/images/loading.gif" style="width: 21px; height: 21px;"></div>');

            $.ajax({
                type: "POST",
                url: base_url + '/dental-treatment/patients/make-credit-note.php',
                data: $('.create_credit_note_form').serialize(),
                cache: false,
                success: function(msg)
                {
//                    alert(msg);

                    var msg_json,
                        error = false;

                    try
                    {
                        msg_json = $.parseJSON(msg);
                    }

                    catch(e)
                    {
                        error = true;
                    }

                    this_var.parent().find('.loading').remove();

                    if(error == false)
                    {
                        if(msg_json.code == 'success')
                        {
                            this_var.parents('.create_credit_note_div').parent().append('<span style="color: #FF0000">Credited to ' + msg_json.invoice_id_text + '</span>');
                            this_var.parents('.create_credit_note_div').parent().find('.create_credit_note').remove();
                            this_var.parents('.create_credit_note_div').remove();
                        
                            // Show billing statement
                            /*
                            $('#invoices>tbody').find('.info_message').parent().parent().remove();

                            if($('#all_invoices_total').length == 0)
                            {
                                $('#invoices>tbody').append(msg_json.message);

                                $('#invoices>tbody').prepend('<tr id="all_invoices_total">'
                                                                        + '<td class="table_content2 number_td" colspan="5">&nbsp;</td>'
                                                                        + '<td class="table_content2 number_td" style="color: green"><span id="total_charges">' + $('.invoice_total_balance').text() + '</span><br>(total)</td>'
                                                                        + '<td class="table_content2 number_td" style="color: #0024D6"><span id="total_debit">0.00</span><br>(total)</td>'
                                                                        + '<td class="table_content2 number_td" style="color: #E30303"><span id="total_balance">' + $('.invoice_total_balance').text() + '</span><br>(total)</td>'
                                                                    + '</tr>');
                            }
                            else
                            {
                            */
//                                $('#all_invoices_total').next().after(msg); // oud, hierdoor kwam er geen ruimte tussen de nieuwe invoice en de oude, weet niet zeker of dit weg kan...
                                $('#invoices .all_invoices_total').after(msg_json.message);

                                var total_charges = Number($('#invoices .total_charges').text().replace(/,/g, '').replace(/ /g, ''));
                                var total_debit   = Number($('#invoices .total_debit').text().replace(/,/g, '').replace(/ /g, ''));
                                var total_balance = Number($('#invoices .total_balance').text().replace(/,/g, '').replace(/ /g, ''));
//                                                                                                            console.log(msg_json.invoice_number);
                                var this_invoice_charges = Number($('#invoices .charges_total_' + msg_json.invoice_number).text().replace(/,/g, '').replace(/ /g, ''));
                                var this_invoice_debit   = Number($('#invoices .debit_total_' + msg_json.invoice_number).text().replace(/,/g, '').replace(/ /g, ''));
                                var this_invoice_balance = Number($('#invoices .invoice_total_balance:first').text().replace(/,/g, '').replace(/ /g, ''));

//                                console.log(total_charges + ' + ' + this_invoice_charges);
//                                console.log(total_debit + ' + ' + this_invoice_debit);
//                                console.log(total_balance + ' + ' + this_invoice_balance);

                                $('#invoices .total_charges').text(number_format(total_charges + this_invoice_charges, 2, '.', ','));
                                $('#invoices .total_debit').text(number_format(total_debit + this_invoice_debit, 2, '.', ','));
                                $('#invoices .total_balance').text(number_format(total_balance + this_invoice_balance, 2, '.', ','));
//                            }

                            $('#invoices .invoice_' + msg_json.invoice_id + ' td').css('background-color', '').css('border-color', '').dequeue();
                            highlight_animation( $('#invoices .invoice_' + msg_json.invoice_id + ' td'), 10000);


                            // Insert unbilled records
                            if(typeof uninvoiced_records !== 'undefined')
                            {
                                $('#uninvoiced_records>tbody').prepend(msg_json.uninvoiced_records);
                                $('#uninvoiced_records>tbody').find('.info_message').parent().parent().remove();

                                $.each(msg_json.progress_records, function(index, value)
                                {
                                    $('#invoices #uninvoiced_record_id_' + value + ' td').css('background-color', '').css('border-color', '').dequeue();
                                    highlight_animation($('#invoices #uninvoiced_record_id_' + value + ' td'), 10000);
                                });
                            }


                            // Enable progress record lines
                            $('#dental_progress_record tr.already_invoiced').each(function(index, value)
                            {
                                if($.inArray($(this).data('record_id'), msg_json.progress_records) != -1)
                                {
                                    $(this).removeClass('already_invoiced');
                                    $(this).children(":first").css('background', '').css('backgroundColor', '#FFFFFF');
                                }
                            });
                            
                            goToByScroll('invoices');

                            $.zoombox.html(display_greta('The credit note has been generated and the original billing statement(s) has/have been placed back under <b>"Unbilled records"</b>'), $.extend(true, {}, zoombox_options, {theme: 'infobox', width: '400', height: '115'}));
//                            $.zoombox.html('The bill has been credited and all the uninvoiced records have been put back in place', zoombox_options);
//                            alert('The bill has been credited and all the uninvoiced records have been put back in place');
                        }

                        else if(msg_json.code == 'cancel')
                        {
                            alert(msg_json.message);
                        }

                        else if(msg_json.code == 'error')
                        {
                            alert(msg_json.message);
                        }

                        else
                        {
                            alert(msg_json.message);
                        }
                    }

                    else
                        alert('Error, please try again.');
                }
            });
        })
        .on('click', '.create_credit_note_form_cancel', function(e)
        {
            $('.create_credit_note_div').remove();
        });


    // Account renewal
    $('#content-content').on("click", '.subscribe_me', function()
    {
        $("#selected_subscription").show();

        $('#selected_subscription').html('<div class="loading" style="margin: 10px">'
                                                        + '<img src="' + base_url + '/images/loading.gif">'
                                                    + '</div>');

        $.ajax(
        {
            type: "GET",
            url: base_url + "/manage-my-account/manage-subscription/renew_subscription_step2.php",                                                                                                                                             //  + $('.' + this_dropdown_group + '[data-type="' + dropdowns_after.eq(index).attr('data-type') + '"]').index($(this).parent())
            data: 'subscription_type=' + $(this).attr('data-subscription_type') + "&chairs=" + $(this).attr('data-chairs'),
            cache: false,
            success: function(msg)
            {
//              alert(msg);

                var msg_json,
                    error = false;

                try
                {
                    msg_json = $.parseJSON(msg);
                }

                catch(e)
                {
                    error = true;
                }

                if(error == false && msg_json.code == 'success')
                {
                    $('#selected_subscription').html(msg_json.message);
                    goToByScroll('selected_subscription');
                }

                else
                {
                    $('#selected_subscription').html(msg_json.message);
                }
            }
        });
    });
    
    $('#content-content').on("change", '.renew-subscription-clinic-id', function()
    {
        $("#selected_clinic").show();

        if($(this).val() == '')
        {
            $('#selected_clinic').html('');
        }
        else
        {
            $('#selected_clinic').html('<div class="loading" style="margin: 10px">'
                                                    + '<img src="' + base_url + '/images/loading.gif">'
                                                + '</div>');

            $.ajax(
            {
                type: "GET",
                url: base_url + "/manage-my-account/manage-subscription/renew_subscription_step3.php",                                                                                                                                             //  + $('.' + this_dropdown_group + '[data-type="' + dropdowns_after.eq(index).attr('data-type') + '"]').index($(this).parent())
                data: 'subscription_type=' + $(this).attr('data-subscription_type') + "&chairs=" + $(this).attr('data-chairs') + "&clinic_id=" + $(this).val(),
                cache: false,
                success: function(msg)
                {
//                  alert(msg);

                    var msg_json,
                        error = false;

                    try
                    {
                        msg_json = $.parseJSON(msg);
                    }

                    catch(e)
                    {
                        error = true;
                    }

                    if(error == false && msg_json.code == 'success')
                    {
                        $('#selected_clinic').html(msg_json.message);
                        goToByScroll('selected_clinic');
                    }

                    else
                    {
                        $('#selected_clinic').html(msg_json.message);
                    }
                }
            });
        }
    });
});



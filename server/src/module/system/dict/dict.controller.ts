import { Controller, Get, Post, Body, Query, Put, Patch, HttpCode, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiConsumes, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { DictService } from './dict.service';
import { CreateDictTypeDto, UpdateDictTypeDto, ListDictType, CreateDictDataDto, UpdateDictDataDto, ListDictData } from './dto/index';

@ApiTags('字典管理')
@Controller('system/dict')
export class DictController {
  constructor(private readonly dictService: DictService) {}

  //字典类型
  @ApiOperation({
    summary: '字典类型-创建',
  })
  @ApiBody({
    type: CreateDictTypeDto,
    required: true,
  })
  @HttpCode(200)
  @Post('/type')
  createType(@Body() createDictTypeDto: CreateDictTypeDto) {
    return this.dictService.createType(createDictTypeDto);
  }

  @ApiOperation({
    summary: '字典类型-删除',
  })
  @Delete('/type/:id')
  deleteType(@Param('id') ids: string) {
    const dictIds = ids.split(',').map((id) => id);
    return this.dictService.deleteType(dictIds);
  }

  @ApiOperation({
    summary: '字典类型-修改',
  })
  @Put('/type')
  updateType(@Body() updateDictTypeDto: UpdateDictTypeDto) {
    return this.dictService.updateType(updateDictTypeDto);
  }

  @ApiOperation({
    summary: '字典类型-列表',
  })
  @Get('/type/list')
  findAllType(@Query() query: ListDictType) {
    return this.dictService.findAllType(query);
  }

  @ApiOperation({
    summary: '全部字典类型-下拉数据',
  })
  @Get('/type/optionselect')
  findOptionselect() {
    return this.dictService.findOptionselect();
  }

  @ApiOperation({
    summary: '字典类型-详情',
  })
  @Get('/type/:id')
  findOneType(@Param('id') id: string) {
    return this.dictService.findOneType(id);
  }

  // 字典数据
  @ApiOperation({
    summary: '字典数据-创建',
  })
  @HttpCode(200)
  @Post('/data')
  createDictData(@Body() createDictDataDto: CreateDictDataDto) {
    return this.dictService.createDictData(createDictDataDto);
  }

  @ApiOperation({
    summary: '字典数据-删除',
  })
  @Delete('/data/:id')
  deleteDictData(@Param('id') id: string) {
    return this.dictService.deleteDictData(id);
  }

  @ApiOperation({
    summary: '字典数据-修改',
  })
  @Put('/data')
  updateDictData(@Body() updateDictDataDto: UpdateDictDataDto) {
    return this.dictService.updateDictData(updateDictDataDto);
  }

  @ApiOperation({
    summary: '字典数据-列表',
  })
  @Get('/data/list')
  findAllData(@Query() query: ListDictData) {
    return this.dictService.findAllData(query);
  }

  @ApiOperation({
    summary: '字典数据-详情',
  })
  @Get('/data/:id')
  findOneDictData(@Param('id') dictCode: string) {
    return this.dictService.findOneDictData(dictCode);
  }

  @ApiOperation({
    summary: '字典数据-类型-详情【走缓存】',
  })
  @Get('/data/type/:id')
  findOneDataType(@Param('id') dictType: string) {
    return this.dictService.findOneDataType(dictType);
  }
}
